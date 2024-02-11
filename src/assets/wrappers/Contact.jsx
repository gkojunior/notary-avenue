import styled from 'styled-components'

const Wrapper = styled.section`
	width: 100vw;
	.message {
		text-align: center;
	}
	.formContainer {
		margin: 8em auto;
		max-width: 40em;
		border:2px solid pink;
		border-radius: var(--borderRadius);
		padding:4rem 5rem;
	}
	input {
		width: 100%;
		height: 35px;
		padding: 7px;
		outline: none;
		border-radius: 5px;
		border: 2px solid rgb(220, 220, 220);

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
			padding: 3px;
		}
	}
	/* ---------- Laptop View ------------ */

	@media only screen and (max-width: 1024px) {
	}

	@media only screen and (min-width: 1024px) {
	}
`
export default Wrapper
