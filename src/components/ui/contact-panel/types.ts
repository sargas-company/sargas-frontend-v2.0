export type FormState = {
	name: string
	company: string
	email: string
	phone: string
	phoneCountry: string
	message: string
}

export type ContactFormSubmitPayload = FormState & {
	services: string[]
	files: File[]
}

export type ContactPanelProps = {
	open: boolean
	setOpen: (open: boolean) => void
	onBookCall?: () => void
	onSubmit?: (payload: ContactFormSubmitPayload) => Promise<void> | void
}
