import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { RootLayout } from './layout'
import { Background } from './components/layout/Background'
import { RouteTransitionOverlay } from './components/layout/RouteTransitionOverlay'
import { WebildPage } from './pages/work/WebildPage.tsx'
import { GraffitiPage } from './pages/work/GraffitiPage.tsx'
import { LocalServicePage } from './pages/work/LocalServicePage.tsx'
import { BotsPage } from './pages/work/BotsPage.tsx'

import './index.css'

import { SmoothScrollProvider } from './components/layout/SmoothScrollProvider'
import { HashScrollHandler } from './components/layout/HashScrollHandler'
function App() {
	return (
		<BrowserRouter>
			<SmoothScrollProvider>
				<div className='relative min-h-screen '>
					<Background />
					<HashScrollHandler />
					<RouteTransitionOverlay />

					<RootLayout>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/work/webild' element={<WebildPage />} />
							<Route path='/work/graffiti' element={<GraffitiPage />} />
							<Route path='/work/local-service' element={<LocalServicePage />} />
							<Route path='/work/ai-bots' element={<BotsPage />} />
						</Routes>
					</RootLayout>
				</div>
			</SmoothScrollProvider>
		</BrowserRouter>
	)
}

export default App
