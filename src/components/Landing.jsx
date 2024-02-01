import Wrapper from '../assets/wrappers/Landing'
import { Link } from 'react-router-dom'

const Landing = () => {
	return (
		<Wrapper>
			<div>
				<div className='container'>
					<h1>Notary <span>Avenue</span> </h1>
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
			</div>
		</Wrapper>
	)
}

export default Landing
