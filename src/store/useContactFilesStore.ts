import { create } from 'zustand'

type ContactFilesState = {
	files: File[]
	setFiles: (files: File[]) => void
	addFiles: (files: File[]) => void
	removeFile: (index: number) => void
	resetFiles: () => void
}

export const useContactFilesStore = create<ContactFilesState>((set) => ({
	files: [],

	setFiles: (files) => set({ files }),

	addFiles: (nextFiles) =>
		set((state) => ({
			files: [...state.files, ...nextFiles],
		})),

	removeFile: (index) =>
		set((state) => ({
			files: state.files.filter((_, i) => i !== index),
		})),

	resetFiles: () => set({ files: [] }),
}))
