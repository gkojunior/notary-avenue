import styled from 'styled-components'

const Wrapper = styled.section`
	background: grey;
	height:100vh;

	.message {
		text-align: center;
	}
	.formContainer {
		background-color:rgb(211, 211, 211);
		margin: 3em auto;
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
	.form {
	width: 90vw;
	max-width: var(--fixed-width);
	background: var(--white);
	border-radius: var(--borderRadius);
	box-shadow: var(--shadow-2);
	padding: 2rem 2.5rem;
	margin: 3rem auto;
}
.form-label {
	display: block;
	font-size: 1em;
	margin-bottom: 0.5rem;
	text-transform: capitalize;
	letter-spacing: var(--letterSpacing);
}
.form-input,
.form-textarea {
	width: 100%;
	padding: 0.375rem 0.75rem;
	border-radius: var(--borderRadius);
	background: var(--backgroundColor);
	border: 1px solid var(--grey-200);
}
.form-row {
	margin-bottom: 1rem;
}

.form-textarea {
	height: 7rem;
}
::placeholder {
	font-family: inherit;
	color: var(--grey-400);
}
.form-alert {
	color: var(--red-dark);
	letter-spacing: var(--letterSpacing);
	text-transform: capitalize;
}

	/* ---------- Cell phone View ------------ */

	@media only screen and (max-width: 425px) {
		.formContainer{
			margin:1em auto;
		}
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
