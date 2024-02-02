import styled from 'styled-components'

const Wrapper = styled.section`
	height: 100vh;
	width: 100vw;
	background: #f8bcc6cc;
	.message {
		text-align: center;
	}
	form {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		font-size: 1em;
	}
	.formContainer {
		padding: 5rem 0 0 31rem;

		width: 500px;
	}
	input {
		width: 100%;
		height: 35px;
		padding: 7px;
		outline: none;
		border-radius: 5px;
		border: 1px solid rgb(220, 220, 220);

		&:focus {
			border: 2px solid rgb(254, 83, 243);
		}
	}
	textarea {
		max-width: 100%;
		min-width: 100%;
		width: 100%;
		max-height: 100%;
		min-height: 100%;
		padding: 7px;
		outline: none;
		border-radius: 5px;
		border: 1px solid rgb(220, 220, 220);

		&:focus {
			border: 2px solid rgb(254, 83, 243);
		}
	}
	label {
		margin-top: 1rem;
	}
	input[type='submit'] {
		margin-top: 2rem;
		cursor: pointer;
		background: rgb(254, 83, 243);
	}

	/* ---------- Cell phone View ------------ */

	@media only screen and (max-width: 425px) {
	}
	/* ---------- Tablet View ------------ */

	@media only screen and (max-width: 768px) {
		input {
		width: 100%;
		height: 15px;
		padding: 3px;
		}
		.formContainer {
		padding: 5rem 0 0 5px;
	}
	}
	/* ---------- Laptop View ------------ */

	@media only screen and (max-width: 1024px) {
		.formContainer {
		padding: 5rem 0 0 9rem;
	}
	}

	@media only screen and (min-width: 1025px) {
		.formContainer {
		padding: 5rem 0 0 16rem;
	}
	}
`
export default Wrapper
