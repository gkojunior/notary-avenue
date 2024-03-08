import styled from 'styled-components'

const Wrapper = styled.section`
	width: 100vw;
	padding: 2em;
	background: var(--pink-dark);
	text-align: center;
	font-size: 1.3rem;
	color: white;
	.links {
		margin-top: 1rem;
	}
	a {
		padding: 1rem;
		color: white;
	}
	p {
		color: black;
		padding: 1em;
	}
	.copyright {
		text-transform: capitalize;
	}
	.footerMessage {
		font-size: 0.8em;
		font-weight: 700;
		max-width: 60em;
		margin: 0 auto;
		text-align: center;
	}
	/* ---------- Cell phone View ------------ */

	@media screen and (max-width: 425px) {
		.links {
			font-size: 1.3rem;
			display: grid;
		}
	}
`
export default Wrapper
