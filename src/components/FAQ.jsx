import React from 'react'
import Wrapper from '../assets/wrappers/FAQ'
import Footer from './Footer'
import Navbar from './Navbar'
import Title from './Title'
const FAQ = () => {
	return (
		<>
			<Wrapper>
				<Navbar />

				<div className='FAQuestions'>
				<div className='title'>
				<Title title='Fequently' subTitle='Asked Question' />
			</div>
					<h1>What is a Notary?</h1>
					<p>
						A Notary is a person of integrity, appointed by the Secretary of
						State to verify the identity of document signers. A Notary also
						performs copy certifications and administers oaths and affirmations.
						What is a Notary Signing Agent?A notary signing agent is a notary
						public that notarizes mortgage documents for borrowers who purchase
						or refinance their current mortgage. Notary signing agents are
						impartial witnesses who identify the signer(s), verify that all
						documents are signed and dated, notarize the documents, and return
						the executed loan package to the lender.
					</p>

					<p>
						What is a Notarization?Notarization is a certificate filled out by
						the Notary, certifying certain facts about the signer and document.
						The Notary does not verify the accuracy or validity of the document.
						Proper ID (What to Bring)Proper identification is required for any
						notarial service that requires verification of the signature.
						Virginia recognizes the following types of identification as valid:
						<ul>
							<li>* Virginia Driver License or ID Card</li>
							<li>* United States passport</li>
							<li>* Driver license or ID card by another state</li>
							<li>
								* Mexican or Canadian driver license issued by an authorized
								agency
							</li>
							<li>
								* US Military identification card (must include a signature)
							</li>
							<li>
								* Foreign passport, if stamped by U.S. Citizenship and
								Immigration Services (USCIS)
							</li>
							<li>
								* Green Card, Permanent residence/Alien Card (only for documents
								related to USCIS–e.g., Affidavit of Support)
							</li>
							<li>
								* Virginia State, County, or City ID card (with photo, serial
								no., signature, and issue or expiration date) All IDs must be
								either current or issued within the last 5 years. The
								above-mentioned IDs are the only Virginia-approved ID cards.
							</li>
						</ul>
					</p>
				</div>
			</Wrapper>
			<Footer />
		</>
	)
}

export default FAQ
