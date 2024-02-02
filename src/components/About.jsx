import Wrapper from '../assets/wrappers/About'
import { Link } from 'react-router-dom';
import Title from './Title'
import main from '../assets/neek.jpeg'
import Navbar from './Navbar';

const About = () => {
	return (
		<Wrapper>
			<Navbar/>
			<div className='title'>
				<Title title='about' subTitle='me' />
			</div>
			<div className='container page'>
				<div className='info'>
					<h1>
						Shaneka <span>Owusu</span> 
					</h1>
					<p>
					A notary public is an individual who is bonded, licensed or appointed by a state, who serves as an impartial witness to the signing of key documents. Notaries confirm identity, inspect documents and ensure the signers understand the contents of the documents they are signing. The notary is responsible for ensuring the identity of the people signing important documents, being vigilant that state rules are being followed, and using sound judgment if it appears a person is misrepresenting themselves or otherwise working to undermine the notarization process.
					</p>
					<Link to='/services' className='btn btn-hero'>
						My Services
					</Link>
				</div>
				<img src={main} alt='picture' className='img main-img' />
			</div>
		</Wrapper>
	)
}

export default About
