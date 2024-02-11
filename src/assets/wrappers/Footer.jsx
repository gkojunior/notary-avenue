import styled from 'styled-components'

const Wrapper = styled.section`
	width: 100vw;
	padding: 1rem;
	background: #ffc0cbd7;
	text-align: center;
	font-size: 1.3rem;
	.links {
		margin-top: 1rem;
	}
	a {
		padding: 1rem;
	}
	p {
		color: black;
	}
	.copyright {
		text-transform: capitalize;
	}
	.footerMessage {
		max-width: 50em;
		margin: 0 auto;

		text-align: center;
	}
	/* ---------- Cell phone View ------------ */

	@media screen and (max-width: 425px) {
		.links {
			font-size: 1.3rem;
			display:grid;
		}
	}
`
export default Wrapper
