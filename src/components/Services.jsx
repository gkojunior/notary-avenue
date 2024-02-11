import Wrapper from '../assets/wrappers/Services'
import Footer from './Footer'
import Navbar from './Navbar'
import Title from './Title'
import { Link } from 'react-router-dom'

const Services = () => {
	return (
		<Wrapper>
			<Navbar />
			<div className='title'>
				<Title title='Services' subTitle='' />
			</div>	<p className='message'>
				Notary Avenue offers services, professional loan signing, and general
				notary services to businesses and individuals by conveniently meeting
				with customers at an agreed upon location.
			</p>
			<p className='message'>** this list of common forms requiring a notary</p>
			<div className='container page'>
				<div>
			
					<h1>Documents that cannot be notarized: </h1>
					<ul className='underline'>
						<li> Marriage records issued by VA Circuit Court</li>
						<li> Birth certificate</li>
						<li> Death certificates</li>
						<li> Marriage certificates</li>
						<li> Vital records</li>
						<li> Copies or original</li>
					</ul>
				</div>
				<div>
					<h1>Documents that can be notarized: </h1>
					<ul>
						<li> Power Of Attorney</li>
						<li> Wills/Trust</li>
						<li> School transcript</li>
						<li> Diplomas</li>
						<li> Translations</li>
						<li> Divorce Documents</li>
						<li> Virginia Issued Background Checks</li>
						<li>
							Parental Consent (to travel/to get passport/medical authorization)
						</li>
						<li> Bill of Sale</li>
						<li> Certified Copies </li>
						<li> Temporary Guardianship Agreement </li>
					</ul>
				</div>

				<div><h1>Payment Information:</h1><p className='message'>
				Payments: The rate is determined by your location and the number of
				documents that need to be notarized. Payment is due upon completion of
				services. Travel fees apply and are separate from the notarization fee.
			</p>
			<p className='message'>
				Accepted Payment Methods: Cash, PayPal, Venmo, Apple Pay
			</p>
			

			</div>
			</div>
<p className='message'>
				Please note: Providing the wrong type of document, failing to supply
				required witnesses, or requesting the wrong type of notarial service
				does not constitute an error on the notary’s part. By law, a
				non-attorney notary cannot explain or interpret the contents of any
				documents for you, instruct you on how to complete a document or direct
				you on the advisability of signing a particular document. Please make
				sure to seek guidance from the requesting agency or an attorney
				regarding any legal questions or advice you may have.
			</p>
			<Footer />
		</Wrapper>
	)
}

export default Services
