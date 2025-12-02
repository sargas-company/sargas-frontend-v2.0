import noiseImage from '../../assets/noise.webp'

type BackgroundProps = {
	variant?: 'global' | 'section'
}

export const Background = ({ variant = 'global' }: BackgroundProps) => {
	const noiseClass =
		variant === 'section'
			? 'pointer-events-none absolute inset-0 z-0 opacity-[0.04]'
			: 'pointer-events-none fixed inset-x-0 top-1/2 z-0 h-screen -translate-y-1/2 opacity-[0.04]'

	const streakClass =
		variant === 'section'
			? 'pointer-events-none absolute inset-0 -z-10 overflow-hidden'
			: 'pointer-events-none absolute inset-0 -z-10 h-[200vh] overflow-hidden'

	const baseGradient =
		variant === 'section'
			? 'linear-gradient(225deg, #2f2f2f 0%, #0f0f0f 100%)'
			: 'linear-gradient(225deg, #ffffff 0%, #dbdbdb 100%)'

	// const streakMask =
	// 	variant === 'section'
	// 		? 'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.7) 22%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0) 60%)'
	// 		: 'radial-gradient(125% 100% at 0 0, #000 0%, #00000039 88.2883%, #0000 100%)'
const streakMask =
		variant === 'section'
			? 'linear-gradient(165deg, #fff 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0) 100%)'
			: 'radial-gradient(90% 100% at 0 0, #000 0%, #00000039 88.2883%, #0000 100%)'

	return (
		<>
			<div className={noiseClass}>
				<div
					className='absolute inset-0'
					style={{
						borderRadius: 'inherit',
						backgroundImage: `url(${noiseImage})`,
						backgroundRepeat: 'repeat',
						backgroundPosition: 'left top',
						backgroundSize: '150px auto',
						border: 0,
					}}
				/>
			</div>
			<div
				className={streakClass}
				style={{
					background: baseGradient,
					WebkitMask: streakMask,
					mask: streakMask,
				}}
			>
				<div
					className='absolute overflow-hidden'
					style={{
						background: 'linear-gradient(#ffffff 0% 83.9344%, #fff0 100%)',
						width: '591px',
						maxWidth: '960px',
						height: '1269px',
						top: '-209px',
						left: 'calc(33.6111% - 295.522px)',
						transform: 'skewX(45deg)',
						WebkitMask:
							'linear-gradient(90deg, #0000 0%, #000 20.0362%, #0000 36.175%, #000 55.4054%, #00000021 67.1171%, #000 78.2306%, #0000 97.2973%)',
						mask: 'linear-gradient(90deg, #0000 0%, #000 20.0362%, #0000 36.175%, #000 55.4054%, #00000021 67.1171%, #000 78.2306%, #0000 97.2973%)',
					}}
				/>
				<div
					className='absolute overflow-hidden'
					style={{
						background: 'linear-gradient(#fff 0% 83.9344%, #fff0 100%)',
						width: '582px',
						maxWidth: '960px',
						height: '1269px',
						position: 'absolute',
						top: '-209px',
						left: 'calc(-1.52778% - 291.002px)',
						transform: 'skewX(45deg)',
						WebkitMask:
							'linear-gradient(90deg, #0000 11.3985%, #000 25.5578%, #0000008c 41.6966%, #00000021 67.1171%, #000 78.2306%, #0000 97.2973%)',
						mask: 'linear-gradient(90deg, #0000 11.3985%, #000 25.5578%, #0000008c 41.6966%, #00000021 67.1171%, #000 78.2306%, #0000 97.2973%)',
					}}
				/>
				<div
					className='absolute overflow-hidden'
					style={{
						background: 'linear-gradient(#fff 0% 67%, #fff0 100%)',
						width: '441px',
						maxWidth: '960px',
						height: '1269px',
						position: 'absolute',
						top: '-209px',
						left: 'calc(33.6806% - 220.619px)',
						transform: 'skewX(45deg)',
						WebkitMask:
							'linear-gradient(90deg, #0000 9.81489%, #000 20.0362%, #0000008c 28.5878%, #0000006c 40.0901%, #000 48.6487%, #0004 54.5045%, #00000021 78.579%, #000 88.554%, #0000 97.2973%)',
						mask: 'linear-gradient(90deg, #0000 9.81489%, #000 20.0362%, #0000008c 28.5878%, #0000006c 40.0901%, #000 48.6487%, #0004 54.5045%, #00000021 78.579%, #000 88.554%, #0000 97.2973%)',
					}}
				/>
				<div
					className='absolute overflow-hidden'
					style={{
						background: 'linear-gradient(#fff 0% 83.9344%, #fff0 100%)',
						width: '684px',
						maxWidth: '960px',
						height: '1269px',
						top: '-209px',
						left: 'calc(50.1389% - 341.798px)',
						transform: 'skewX(45deg)',
						WebkitMask:
							'linear-gradient(90deg, #0000 0%, #000 17.6591%, #0000008c 26.6417%, #000 35.2302%, #0000 47.6985%, #00000021 69.1776%, #000 79.1456%, #0000 97.2973%)',
						mask: 'linear-gradient(90deg, #0000 0%, #000 17.6591%, #0000008c 26.6417%, #000 35.2302%, #0000 47.6985%, #00000021 69.1776%, #000 79.1456%, #0000 97.2973%)',
					}}
				/>
				<div
					className='absolute overflow-hidden'
					style={{
						background: 'linear-gradient(#fff 0% 83.9344%, #fff0 100%)',
						width: '426px',
						maxWidth: '960px',
						height: '1269px',
						top: '-209px',
						left: 'calc(49.0972% - 213.086px)',
						transform: 'skewX(45deg)',
						WebkitMask:
							'linear-gradient(90deg, #0000 0%, #000 20.0362%, #0000008c 27.5778%, #000 42.3423%, #0000 48.6047%, #00000021 67.1171%, #000 74.9525% 82.4324%, #00000078 88.6719%, #0000 97.2973%)',
						mask: 'linear-gradient(90deg, #0000 0%, #000 20.0362%, #0000008c 27.5778%, #000 42.3423%, #0000 48.6047%, #00000021 67.1171%, #000 74.9525% 82.4324%, #00000078 88.6719%, #0000 97.2973%)',
					}}
				/>
			</div>
		</>
	)
}
