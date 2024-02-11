import Wrapper from '../assets/wrappers/Services'
import Footer from './Footer'
import Navbar from './Navbar'
import Title from './Title'

const Services = () => {
	return (
		<Wrapper>
			<Navbar />
			<div className='title'>
				<Title title='Services' subTitle='' />
			</div>
			<p className='message'>
				Notary Avenue offers services, professional loan signing, and general
				notary services to businesses and individuals by conveniently meeting
				with customers at an agreed upon location.{' '}
			</p>
			<p className='message'>
				Payments: The rate is determined by your location and the number of
				documents that need to be notarized. Payment is due upon completion of
				services. Travel fees apply and are separate from the notarization fee.{' '}
			</p>
			<p className='message'>
				Accepted Payment Methods: Cash, PayPal, Venmo, Apple Pay
			</p>
			<p>
				Please note: Providing the wrong type of document, failing to supply
				required witnesses, or requesting the wrong type of notarial service
				does not constitute an error on the notary’s part. By law, a
				non-attorney notary cannot explain or interpret the contents of any
				documents for you, instruct you on how to complete a document or direct
				you on the advisability of signing a particular document. Please make
				sure to seek guidance from the requesting agency or an attorney
				regarding any legal questions or advice you may have.
			</p>

			<p className='message'>** this list of common forms requiring a notary</p>
			<div className='container page'>
				<div>
					<dl>
						<dt>Documents that can be notarized:</dt>
						<dd>- Power Of Attorney</dd>
						<dd>- Wills/Trust</dd>
						<dd>- School transcript</dd>
						<dd>- Diplomas</dd>
						<dd>- Translations</dd>
						<dd>- Divorce Documents</dd>
						<dd>- Virginia Issued Background Checks</dd>
						<dd>
							- Parental Consent (to travel/to get passport/medical
							authorization)
						</dd>
						<dd>- Bill of Sale</dd>
						<dd>- Certified Copies </dd>
						<dd>- Temporary Guardianship Agreement </dd>
					</dl>
				</div>
				<div className=''>
					<dt>Documents that cannot be notarized:</dt>
					<dl className='underline'>
						<dd>- Marriage records issued by VA Circuit Court</dd>
						<dd>- birth certificate</dd>
						<dd>- death certificates</dd>
						<dd>- marriage certificates</dd>
						<dd>- Vital records</dd>
						<dd>- copies or original</dd>
					</dl>
				</div>
			</div>
			<Footer/>
		</Wrapper>
	)
}

export default Services
