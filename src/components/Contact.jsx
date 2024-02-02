import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Wrapper from '../assets/wrappers/Contact'
import Title from './Title'
import Navbar from './Navbar'

const Contact = () => {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_1u7iuuc',
				'template_yjvnozs',
				form.current,
				'klWFSfxiPSj_1Ltbu'
			)
			.then(
				(result) => {
					console.log(result.text)
					console.log('message send')
				},
				(error) => {
					console.log(error.text)
				}
			)
	}
	return (
		<Wrapper>
			<Navbar />
			<div className='title'>
				<Title title='Contact' subTitle='Me' />
			</div>
			<div className='formContainer'>
				<p className='message'>Send me an email with a detail message!</p>
				<form ref={form} onSubmit={sendEmail}>
					<label>Name</label>
					<input type='text' name='user_name' />
					<label>Email</label>
					<input type='email' name='user_email' />
					<label>Message</label>
					<textarea name='message' />
					<input type='submit' value='Send' />
				</form>
			</div>
		</Wrapper>
	)
}

export default Contact
