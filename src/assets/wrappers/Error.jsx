import styled from 'styled-components'

const Wrapper = styled.main`

	text-align: center;
	img {
		width: 90vw;
		max-width: 600px;
		display: block;
		margin:  5rem 0 2rem;
	}
	display: flex;
	align-items: center;
	justify-content: center;
	h3 {
		margin-bottom: 0.5rem;
	}
	p {
		margin-top: 0;
		margin-bottom: 0.5rem;
		color: black;
	}
	a {
		text-decoration: underline;
		text-transform: capitalize;
	}
`

export default Wrapper