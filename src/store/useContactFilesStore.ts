import { create } from 'zustand'

const MAX_FILES_COUNT = 20
const MAX_TOTAL_SIZE_BYTES = 100 * 1024 * 1024

const getTotalSize = (files: File[]): number => {
	return files.reduce((sum: number, file: File) => sum + file.size, 0)
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

export const useContactFilesStore = create<ContactFilesState>(
	(set, get): ContactFilesState => ({
		files: [],
		error: null,

		setFiles: (nextFiles: File[]): void => {
			if (nextFiles.length > MAX_FILES_COUNT) {
				set({
					error: `You can upload up to ${MAX_FILES_COUNT} files.`,
				})
				return
			}

			const totalSize: number = getTotalSize(nextFiles)

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

		addFiles: (incomingFiles: File[]): void => {
			const currentFiles: File[] = get().files

			const mergedFiles: File[] = [...currentFiles, ...incomingFiles].filter(
				(file: File, index: number, arr: File[]) =>
					index === arr.findIndex((f: File) => f.name === file.name && f.size === file.size)
			)

			if (mergedFiles.length > MAX_FILES_COUNT) {
				set({
					error: `You can upload up to ${MAX_FILES_COUNT} files.`,
				})
				return
			}

			const totalSize: number = getTotalSize(mergedFiles)

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

		removeFile: (index: number): void =>
			set((state: ContactFilesState) => ({
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
	})
)
