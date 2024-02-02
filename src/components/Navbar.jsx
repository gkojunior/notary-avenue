import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper
	from '../assets/wrappers/Navbar'
const Navbar = () => {
	return (
		<Wrapper>
			<h1 className='logo'>Notary Avenue</h1>
			<ul className='links'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/services'>Services</Link>
				</li>
				<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
		</Wrapper>
	)
}

export default Navbar
