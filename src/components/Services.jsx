import Wrapper from '../assets/wrappers/Services'
import Navbar from './Navbar'
import Title from './Title'

const Services = () => {
	return (
		<Wrapper>
			<Navbar />
			<div className='title'>
				<Title title='Services' subTitle='' />
			</div>
			<div className='services'>
				<dl>
					<dt>General Notary Services:</dt>
					<dd>- Jurats</dd>
					<dd>- Oaths/Affirmations</dd>
					<dd>- Copy Certifications</dd>
					<dd>- Deeds Of Trust</dd>
					<dd>- Affidavits</dd>
					<dd>- Verifications</dd>
					<dd>- Power Of Attorney</dd>
					<dd>- Wills</dd>
					<dd>- Online Document Print Fee</dd>
					<dd>- Proofs of Execution by Subscribing Witnesses</dd>
				</dl>
			</div>

			<div className='services'>
				<dl>
					<dt>Credentials:
</dt>
					<dd>- Electronic Notary-VA</dd>
					<dd>- Licensed in Chesterfield County</dd>
					<dd>- Certified Notary Signing Agent
</dd>
					<dd>- NNA Background Screened
</dd>
					<dd>- Errors + Omission Policy
</dd>
					<dd>- Profile Listing on Signing Agent.com
</dd>
					<dd>- Power Of Attorney</dd>
					<dd>- Member of The National Notary Association 
</dd>
					<dd>- Producer: Personal Lines Insurance</dd>
				
				</dl>
			</div>
		</Wrapper>
	)
}

export default Services



