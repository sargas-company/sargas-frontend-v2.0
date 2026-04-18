import React, { useMemo, useState } from 'react'
import { serviceOptions } from './constants'
import { CheckboxItem } from './CheckboxItem'
import { SecondaryAction } from './SecondaryAction'
import { SubmitAction } from './SubmitAction'
import { TextareaField } from './TextareaField'
import { TextField } from './TextField'
import { EmailField, isEmailValid } from './EmailField'
import { FileField } from './FileField'
import type { ContactPanelProps, FormState } from './types'
import { SuccessPill } from './SuccessPill.tsx'
import { PhoneField } from './PhoneField.tsx'
import { useContactFilesStore } from '../../../store/useContactFilesStore.ts'

type ContactFormProps = Pick<ContactPanelProps, 'onBookCall' | 'onSubmit'>

const initialForm: FormState = {
	name: '',
	company: '',
	email: '',
	phone: '',
	phoneCountry: 'us',
	message: '',
}

export function ContactForm({ onBookCall, onSubmit }: ContactFormProps) {
	const [files, setFiles] = useState<File[]>([])

	const [form, setForm] = useState<FormState>(initialForm)
	const [submitAttempted, setSubmitAttempted] = useState(false)
	const [selectedServices, setSelectedServices] = useState<string[]>([
		'Web Development',
		'MVP Development',
	])
	const [submitting, setSubmitting] = useState(false)
	const [submitted, setSubmitted] = useState(false)

	const canSubmit = useMemo(() => {
		return Boolean(form.name.trim() && form.email.trim() && isEmailValid(form.email))
	}, [form])

	const toggleService = (service: string) => {
		setSelectedServices((prev) =>
			prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]
		)
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setSubmitAttempted(true)

		const nameValid = form.name.trim().length > 0
		const emailValid = isEmailValid(form.email)

		if (!nameValid || !emailValid || submitting) return

		setSubmitting(true)

		try {
			const formData = new FormData()

			const files = useContactFilesStore((s) => s.files)
			const resetFiles = useContactFilesStore((s) => s.resetFiles)

			formData.append('name', form.name)
			formData.append('company', form.company)
			formData.append('email', form.email)
			formData.append('phone', form.phone)
			formData.append('phoneCountry', form.phoneCountry)
			formData.append('message', form.message)
			//formData.append('token', process.env.NEXT_PUBLIC_USER_REQUEST_TOKEN);

			selectedServices.forEach((service) => {
				formData.append('services[]', service)
			})

			files.forEach((file) => {
				formData.append('files', file)
			})

			await fetch('/user-request', {
				method: 'POST',
				body: formData,

				baseURL: '',   //  process.env.NEXT_PUBLIC_API_URL
				headers: {
					'Content-Type': 'application/json'
				},
			})

			setSubmitted(true)
			resetFiles()
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
				</form>
			)}
		</div>
	)
}
