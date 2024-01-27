import Wrapper from '../assets/wrappers/Landing'
import { Link } from 'react-router-dom'

const Landing = () => {
	return (
		<Wrapper>
			<div>
				<h1>Notary Avenue</h1>
				<h2>Mobile Service for all your notary needs.</h2>
				<h3>
					Currently servicing Chesterfield, Henrico, Petersburg, and Richmond
				</h3>

				<ul className='links'>
					<li>
						<Link to='/about'>About me</Link>
					</li>
					<li>
						<Link to='/services'>Services</Link>
					</li>
					<li>
						<Link to='/contact'>Let's get in contact</Link>
					</li>
				</ul>
			</div>
		</Wrapper>
	)
}

export default Landing
