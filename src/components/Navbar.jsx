import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Navbar'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	const handleToggle = () => {
		setToggle(!toggle)
	}
	return (
		<Wrapper>
			<nav className={toggle ? 'navbar expanded' : 'navbar'}>
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
					<li>
						<Link to='/questions'>FAQ</Link>
					</li>
				</ul>
				

				<div className='toogle' onClick={handleToggle}>
					{toggle ? <FaTimes /> : <HiMenuAlt3 />}
				</div>
			</nav>
		</Wrapper>
	)
}

export default Navbar
