import { create } from 'zustand'

const MAX_FILES_COUNT = 20
const MAX_TOTAL_SIZE_BYTES = 100 * 1024 * 1024

const getTotalSize = (files: File[]) => {
	return files.reduce((sum, file) => sum + file.size, 0)
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

export const useContactFilesStore = create<ContactFilesState>((set, get) => ({
	files: [],
	error: null,

	setFiles: (nextFiles) => {
		if (nextFiles.length > MAX_FILES_COUNT) {
			set({
				error: `You can upload up to ${MAX_FILES_COUNT} files.`,
			})
			return
		}

		const totalSize = getTotalSize(nextFiles)

		if (totalSize > MAX_TOTAL_SIZE_BYTES) {
			set({
				error: 'Total file size must be less than 100 MB.',
			})
			return
		}

		set({
			files: nextFiles,
			error: null,
		})
	},

	addFiles: (incomingFiles) => {
		const currentFiles = get().files

		const mergedFiles = [...currentFiles, ...incomingFiles].filter(
			(file, index, arr) =>
				index === arr.findIndex((f) => f.name === file.name && f.size === file.size)
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
			error: null,
		})
	},

	removeFile: (index) =>
		set((state) => ({
			files: state.files.filter((_, i) => i !== index),
			error: null,
		})),

	resetFiles: () =>
		set({
			files: [],
			error: null,
		}),

	clearError: () =>
		set({
			error: null,
		}),

	totalSize: () => getTotalSize(get().files),
}))
