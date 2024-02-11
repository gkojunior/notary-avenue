import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Footer'

const Footer = () => {
	return (
		<Wrapper className='section footer'>
			<p className='footerMessage'>Notary Avenue is a woman-owed, black-owned business that proudly provides competent, caring, and professional customer service. We are here to provide all of your notary needs 7 days a week including major holidays. </p>
			<p className="footerMessage">Disclaimer: Notary Avenue is not an attorney and does not provide legal advice. We strongly encourage clients to seek guidance from legal counsel for specific legal matters. </p>
			<div className='links'>
						<Link to='/about'>About me</Link>
						<Link to='/services'>Services</Link>
						<Link to='/contact'>Let's get in contact</Link>
					</div>
			<p className='copyright'>
				copyright &copy; notary avenue
				<span id='date'></span> all rights reserved
			</p>
		</Wrapper>
	)
}

export default Footer
