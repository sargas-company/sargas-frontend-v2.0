import { create } from 'zustand'

const MAX_FILES_COUNT = 20
const MAX_TOTAL_SIZE_BYTES = 100 * 1024 * 1024
const MAX_REJECTED_FILES_IN_MESSAGE = 3

const allowedFileExtensions = [
	'.jpg',
	'.jpeg',
	'.png',
	'.webp',
	'.gif',
	'.heic',
	'.heif',
	'.bmp',
	'.tif',
	'.tiff',
	'.pdf',
	'.doc',
	'.docx',
	'.xls',
	'.xlsx',
	'.ppt',
	'.pptx',
	'.txt',
	'.rtf',
	'.csv',
	'.md',
	'.odt',
	'.ods',
	'.odp',
	'.pages',
	'.numbers',
	'.key',
	'.fig',
	'.sketch',
	'.xd',
	'.psd',
	'.ai',
	'.mp4',
	'.mov',
	'.webm',
	'.m4v',
]

const blockedFileExtensions = new Set([
	'.app',
	'.apk',
	'.bat',
	'.bin',
	'.cmd',
	'.com',
	'.cpl',
	'.dll',
	'.dmg',
	'.exe',
	'.gadget',
	'.hta',
	'.iso',
	'.jar',
	'.js',
	'.jse',
	'.lnk',
	'.msi',
	'.msp',
	'.pkg',
	'.ps1',
	'.reg',
	'.scr',
	'.sh',
	'.sys',
	'.vb',
	'.vbe',
	'.vbs',
	'.ws',
	'.wsc',
	'.wsf',
])

const blockedMimeTypes = new Set([
	'application/javascript',
	'application/x-apple-diskimage',
	'application/x-bat',
	'application/x-dosexec',
	'application/x-executable',
	'application/x-msdownload',
	'application/x-msi',
	'application/x-ms-shortcut',
	'application/x-sh',
	'text/html',
	'text/javascript',
])

const allowedMimeTypes = new Set(['video/mp4', 'video/quicktime', 'video/webm', 'video/x-m4v'])

const allowedFileExtensionSet = new Set(allowedFileExtensions)

export const CONTACT_FILE_ACCEPT = allowedFileExtensions.join(',')

const getTotalSize = (files: File[]): number => {
	return files.reduce((sum: number, file: File) => sum + file.size, 0)
}

const getFileExtension = (fileName: string): string => {
	const lastDotIndex = fileName.lastIndexOf('.')

	if (lastDotIndex <= 0 || lastDotIndex === fileName.length - 1) {
		return ''
	}

	return fileName.slice(lastDotIndex).toLowerCase()
}

const getRejectedFilesMessage = (fileNames: string[]): string => {
	const visibleNames = fileNames.slice(0, MAX_REJECTED_FILES_IN_MESSAGE).join(', ')
	const remainingCount = fileNames.length - MAX_REJECTED_FILES_IN_MESSAGE
	const suffix = remainingCount > 0 ? ` and ${remainingCount} more` : ''

	return `Some files were not added: ${visibleNames}${suffix}. Allowed: images, videos, PDF, Office/iWork docs, text/CSV/Markdown, and common design files.`
}

const splitAllowedFiles = (files: File[]): { allowedFiles: File[]; rejectedNames: string[] } => {
	return files.reduce(
		(result, file) => {
			const extension = getFileExtension(file.name)
			const mimeType = file.type.toLowerCase()
			const blocked =
				blockedFileExtensions.has(extension) ||
				(mimeType.length > 0 && blockedMimeTypes.has(mimeType))
			const allowed =
				allowedFileExtensionSet.has(extension) ||
				(mimeType.length > 0 && allowedMimeTypes.has(mimeType))

			if (!allowed || blocked) {
				result.rejectedNames.push(file.name)
				return result
			}

			result.allowedFiles.push(file)
			return result
		},
		{ allowedFiles: [] as File[], rejectedNames: [] as string[] }
	)
}

type ContactFilesState = {
	files: File[]
	error: string | null
	setFiles: (files: File[]) => void
	addFiles: (files: File[]) => void
	removeFile: (index: number) => void
	resetFiles: () => void
	clearError: () => void
	totalSize: () => number
}

export const useContactFilesStore = create<ContactFilesState>()((set, get) => ({
	files: [],
	error: null,

	setFiles: (nextFiles: File[]): void => {
		const { allowedFiles, rejectedNames } = splitAllowedFiles(nextFiles)

		if (allowedFiles.length > MAX_FILES_COUNT) {
			set({
				error: `You can upload up to ${MAX_FILES_COUNT} files.`,
			})
			return
		}

		const totalSize = getTotalSize(allowedFiles)

		if (totalSize > MAX_TOTAL_SIZE_BYTES) {
			set({
				error: 'Total file size must be less than 100 MB.',
			})
			return
		}

		set({
			files: allowedFiles,
			error: rejectedNames.length > 0 ? getRejectedFilesMessage(rejectedNames) : null,
		})
	},

	addFiles: (incomingFiles: File[]): void => {
		const currentFiles = get().files
		const { allowedFiles, rejectedNames } = splitAllowedFiles(incomingFiles)

		if (!allowedFiles.length && rejectedNames.length > 0) {
			set({
				error: getRejectedFilesMessage(rejectedNames),
			})
			return
		}

		const mergedFiles = [...currentFiles, ...allowedFiles].filter(
			(file: File, index: number, arr: File[]) =>
				index === arr.findIndex((f: File) => f.name === file.name && f.size === file.size)
		)

		if (mergedFiles.length > MAX_FILES_COUNT) {
			set({
				error: `You can upload up to ${MAX_FILES_COUNT} files.`,
			})
			return
		}

		const totalSize = getTotalSize(mergedFiles)

		if (totalSize > MAX_TOTAL_SIZE_BYTES) {
			set({
				error: 'Total file size must be less than 100 MB.',
			})
			return
		}

		set({
			files: mergedFiles,
			error: rejectedNames.length > 0 ? getRejectedFilesMessage(rejectedNames) : null,
		})
	},

	removeFile: (index: number): void =>
		set((state) => ({
			files: state.files.filter((_: File, i: number) => i !== index),
			error: null,
		})),

	resetFiles: (): void =>
		set({
			files: [],
			error: null,
		}),

	clearError: (): void =>
		set({
			error: null,
		}),

	totalSize: (): number => getTotalSize(get().files),
}))
