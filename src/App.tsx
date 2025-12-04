import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { RootLayout } from './layout'
import { Background } from './components/layout/Background'
import { RouteTransitionOverlay } from './components/layout/RouteTransitionOverlay'
import { StridaPage } from './pages/work/StridaPage'
import { BravoPage } from './pages/work/BravoPage'
import { NitroPage } from './pages/work/NitroPage'
import './index.css'

import { FargoPage } from './pages/work/FargoPage'
import { SmoothScrollProvider } from './components/layout/SmoothScrollProvider'
function App() {
	return (
		<BrowserRouter>
			<SmoothScrollProvider>
				<div className='relative min-h-screen '>
					<Background />
					<RouteTransitionOverlay />

					<RootLayout>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/work/strida' element={<StridaPage />} />
							<Route path='/work/bravo' element={<BravoPage />} />
							<Route path='/work/nitro' element={<NitroPage />} />
							<Route path='/work/fargo' element={<FargoPage />} />
						</Routes>
					</RootLayout>
				</div>
			</SmoothScrollProvider>
		</BrowserRouter>
	)
}

export default App
