import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Landing from './components/Landing'
import Services from './components/Services'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	)
}

export default App
