// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { RootLayout } from './layout'
import { Background } from './components/layout/Background'
import { StridaPage } from './pages/work/StridaPage'
import { BravoPage } from './pages/work/BravoPage'
import { NitroPage } from './pages/work/NitroPage'
import './index.css'

import { FargoPage } from './pages/work/FargoPage'
function App() {
	return (
		<BrowserRouter>
			<div className='relative min-h-screen overflow-hidden'>
				<Background />

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
		</BrowserRouter>
	)
}

export default App
