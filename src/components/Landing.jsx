import Wrapper from '../assets/wrappers/Landing'
import { Link } from 'react-router-dom'
import Reviews from './Reviews'

const Landing = () => {
	return (
		<Wrapper>
			<div className='container page'>
				<div className='info'>
					<h1>
						Notary Avenue
					</h1>
					<p>Mobile Service for all your notary needs. Currently servicing Chesterfield, Henrico, Petersburg, and
						Richmond</p>
					<div className='links'>
						<Link to='/about'>About</Link>
						<Link to='/services'>Services</Link>
						<Link to='/contact'>Contact</Link>
						<Link to='/questions'>FAQ</Link>

					</div>
				</div>
			</div>
			<Reviews />
		</Wrapper>
	)
}

export default Landing
