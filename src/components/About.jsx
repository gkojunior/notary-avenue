import Wrapper from '../assets/wrappers/About'
import { Link } from 'react-router-dom'
import Title from './Title'
import main from '../assets/neek.jpeg'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
	return (
		<Wrapper>
			<Navbar />
			<div className='title'>
				<Title title='about' subTitle='me' />
			</div>
			<div className='container page'>
				<div >
					<h1>
						Shaneka <span>Owusu</span>
					</h1>
					<p>
						Hey there! I am Shaneka Owusu, a Notary Public in the Commonwealth
						of Virginia. I provide scheduled and timely notary services in
						Chesterfield, Richmond, Henrico, Chester, Petersburg, Hopewell, and
						Prince George. My rates are competitive and affordable and I will
						come to you! Get in contact with me for a quote !
					</p>
					<Link to='/services' className='btn btn-hero'>
						My Services
					</Link>
				</div>
				<img src={main} alt='picture' className='img main-img' />
			</div>
			<Footer/>
		</Wrapper>
	)
}

export default About
