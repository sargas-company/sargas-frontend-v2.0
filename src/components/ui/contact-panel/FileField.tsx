import { AnimatePresence, motion } from 'framer-motion'
import {
	CONTACT_FILE_ACCEPT,
	useContactFilesStore,
} from '../../../store/useContactFilesStore'
import React from 'react'

export function FileField() {
	const files = useContactFilesStore((s) => s.files)
	const addFiles = useContactFilesStore((s) => s.addFiles)
	const removeFile = useContactFilesStore((s) => s.removeFile)
	const error = useContactFilesStore((s) => s.error)
	const clearError = useContactFilesStore((s) => s.clearError)
	const totalSize = useContactFilesStore((s) => s.totalSize)

	const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const nextFiles = Array.from(e.target.files || [])
		if (!nextFiles.length) return

		clearError()
		addFiles(nextFiles)
		e.target.value = ''
	}

	return (
		<div className='block'>
			<div className='mb-3 flex items-center gap-2'>
				<span className='text-[15px] font-medium text-white'>Files</span>
				<span className='text-[13px] font-normal text-white/35'>(optional)</span>
			</div>

			<label className='flex min-h-[64px] w-full cursor-pointer flex-col gap-4 rounded-[26px] border border-dashed border-white/15 bg-white/[0.04] px-5 py-4 transition hover:border-white/25 hover:bg-white/[0.06] sm:flex-row sm:items-center sm:justify-between sm:px-6'>
				<div className='sm:pr-4'>
					<div className='text-[16px] font-medium text-white'>Upload files</div>
					<div className='mt-1 text-[13px] text-white/40'>
						Attach images, videos, docs, PDFs or design references
					</div>
				</div>

				<div className='flex items-center justify-between px-1 text-[13px] text-white/40 sm:mt-2'>
					<span className='mr-2'>{files.length}/20 files</span>
					<span>{(totalSize() / 1024 / 1024).toFixed(1)} / 100 MB</span>
				</div>

				<div className='inline-flex h-[42px] w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-4 text-[14px] text-white sm:w-auto'>
					Choose files
				</div>

				<input
					type='file'
					multiple
					accept={CONTACT_FILE_ACCEPT}
					onChange={handleFilesChange}
					className='hidden'
				/>
			</label>

			<AnimatePresence>
				{files.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 8 }}
						transition={{ duration: 0.2 }}
						className='mt-3 flex flex-wrap gap-2'
					>
						{files.map((file, index) => (
							<motion.div
								key={`${file.name}-${index}`}
								initial={{ opacity: 0, scale: 0.94 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.94 }}
								className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[13px] text-white'
							>
								<span className='max-w-[220px] truncate'>{file.name}</span>

								<button
									type='button'
									onClick={() => removeFile(index)}
									className='text-white/50 transition hover:text-white'
								>
									×
								</button>
							</motion.div>
						))}
					</motion.div>
				)}
				{error && <div className='mt-2 px-2 text-[13px] text-[#ff9c85]'>{error}</div>}
			</AnimatePresence>
		</div>
	)
}
