import React, { useMemo, useState } from 'react'
import { serviceOptions } from './constants'
import { CheckboxItem } from './CheckboxItem'
import { SecondaryAction } from './SecondaryAction'
import { SubmitAction } from './SubmitAction'
import { TextareaField } from './TextareaField'
import { TextField } from './TextField'
import { EmailField, isEmailValid } from './EmailField'
import { FileField } from './FileField'
import type { ContactFormSubmitPayload, ContactPanelProps, FormState } from './types'
import { SuccessPill } from './SuccessPill.tsx'
import { PhoneField } from './PhoneField.tsx'
import { useContactFilesStore } from '../../../store/useContactFilesStore.ts'

type ContactFormProps = Pick<ContactPanelProps, 'onBookCall' | 'onSubmit'>

const crmApiUrl = import.meta.env.API_CRM?.trim()

const initialForm: FormState = {
	name: '',
	company: '',
	email: '',
	phone: '',
	phoneCountry: 'us',
	message: '',
}

export function ContactForm({ onBookCall, onSubmit }: ContactFormProps) {
	const [form, setForm] = useState<FormState>(initialForm)
	const [submitAttempted, setSubmitAttempted] = useState(false)
	const [selectedServices, setSelectedServices] = useState<string[]>([
		'Web Development',
		'MVP Development',
	])
	const [servicesTouched, setServicesTouched] = useState(false)
	const [phoneValid, setPhoneValid] = useState(true)
	const [submitting, setSubmitting] = useState(false)
	const [submitted, setSubmitted] = useState(false)
	const [submitError, setSubmitError] = useState<string | null>(null)
	const files = useContactFilesStore((s) => s.files)
	const resetFiles = useContactFilesStore((s) => s.resetFiles)

	const servicesValid = selectedServices.length > 0
	const showServicesError = !servicesValid && (servicesTouched || submitAttempted)
	const phoneValidForSubmit = !form.phone.trim() || phoneValid

	const canSubmit = useMemo(() => {
		return Boolean(
			form.name.trim() &&
				form.email.trim() &&
				isEmailValid(form.email) &&
				servicesValid &&
				phoneValidForSubmit
		)
	}, [form, phoneValidForSubmit, servicesValid])

	const toggleService = (service: string) => {
		setServicesTouched(true)
		setSelectedServices((prev) =>
			prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]
		)
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setSubmitAttempted(true)

		const nameValid = form.name.trim().length > 0
		const emailValid = isEmailValid(form.email)

		if (!nameValid || !emailValid || !servicesValid || !phoneValidForSubmit || submitting) return

		setSubmitting(true)
		setSubmitError(null)

		try {
			if (!crmApiUrl) {
				throw new Error('API_CRM is not configured')
			}

			const payload: ContactFormSubmitPayload = {
				name: form.name.trim(),
				company: form.company.trim(),
				email: form.email.trim(),
				phone: form.phone.trim(),
				phoneCountry: form.phoneCountry,
				message: form.message.trim(),
				services: selectedServices,
				files,
			}

			const formData = new FormData()

			formData.append('name', payload.name)
			formData.append('company', payload.company)
			formData.append('email', payload.email)
			formData.append('phone', payload.phone)
			formData.append('phoneCountry', payload.phoneCountry)
			formData.append('message', payload.message)
			formData.append('services', JSON.stringify(payload.services))

			payload.files.forEach((file) => {
				formData.append('files', file)
			})

			const response = await fetch(crmApiUrl, {
				method: 'POST',
				body: formData,
			})

			if (!response.ok) {
				throw new Error(`CRM API request failed with status ${response.status}`)
			}

			await onSubmit?.(payload)

			setSubmitted(true)
			setForm(initialForm)
			setPhoneValid(true)
			resetFiles()
		} catch (error) {
			console.error('Contact form submit failed:', error)
			setSubmitError('Something went wrong. Please try again or book a call.')
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<div className='relative z-[50] min-h-0 px-4 pt-6 pb-6 text-white sm:px-6 md:px-10 lg:px-12 lg:pt-10 lg:pb-10'>
			<div className='max-w-[420px]'>
				<h2 className='text-[28px] leading-[1.04] font-medium tracking-[-0.04em] sm:text-[32px] md:text-[36px]'>
					Get in touch to find out
					<br />
					how we can collaborate.
				</h2>
			</div>

			{submitted ? (
				<SuccessPill />
			) : (
				<form onSubmit={handleSubmit} className='mt-6 flex flex-col pb-6 sm:mt-8'>
					<div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-6 md:gap-y-6'>
						<TextField
							label='Your Full Name'
							value={form.name}
							onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
							placeholder='Full name'
							required
							showError={submitAttempted}
							errorText='Please fill in your name'
						/>

						<TextField
							label='Your Company'
							value={form.company}
							onChange={(value) => setForm((prev) => ({ ...prev, company: value }))}
							placeholder='Company or Brand'
							optional
						/>

						<div className='col-span-2'>
							<EmailField
								value={form.email}
								onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
								showError={submitAttempted}
							/>
						</div>

						<div className='col-span-2'>
							<PhoneField
								value={form.phone}
								onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
								country={form.phoneCountry}
								onCountryChange={(value) =>
									setForm((prev) => ({ ...prev, phoneCountry: value }))
								}
								isValid={phoneValid}
								onValidityChange={setPhoneValid}
								showError={submitAttempted}
							/>
						</div>
					</div>

					<div className='mt-7'>
						<div className='mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:gap-2'>
							<span className='text-[15px] font-medium text-white'>
								Type of Work <span className='text-[#2F7BFF]'>*</span>
							</span>
							<span className='text-[14px] text-white/40'>
								(Pick the areas you'd like to explore with us)
							</span>
						</div>

						<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-8 md:gap-x-12'>
							{serviceOptions.map((item) => (
								<CheckboxItem
									key={item}
									label={item}
									checked={selectedServices.includes(item)}
									onToggle={() => toggleService(item)}
								/>
							))}
						</div>

						{showServicesError && (
							<p className='mt-3 pl-2 text-[13px] text-[#ff9c85]'>
								Please select at least one type of work
							</p>
						)}
					</div>

					<div className='mt-7'>
						<TextareaField
							label='Tell us about your project'
							value={form.message}
							onChange={(value) => setForm((prev) => ({ ...prev, message: value }))}
							placeholder='Details, deadlines etc.'
						/>
					</div>

					<div className='mt-7'>
						<FileField />
					</div>

					<div className='mt-6 flex flex-col gap-5 pt-0 sm:mt-8 sm:flex-row sm:items-end sm:justify-between'>
						<SubmitAction disabled={!canSubmit} loading={submitting} />

						<div className='flex flex-col items-start gap-2 sm:items-end'>
							<span className='text-[14px] text-white/40 sm:mr-5'>Not yet sure?</span>
							<SecondaryAction onClick={onBookCall} />
						</div>
					</div>

					{submitError && <p className='mt-4 text-[14px] text-[#ff9c85]'>{submitError}</p>}
				</form>
			)}
		</div>
	)
}
