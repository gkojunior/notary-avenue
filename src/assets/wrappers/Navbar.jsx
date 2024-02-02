import styled from 'styled-components'

const Wrapper = styled.section`
	width: 100%;
	height: 3vh;
	padding: 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	ul {
		display: flex;
	}
	li {
		text-decoration: none;
		list-style: none;
		padding-left: 50px;
	}
	/* -------- Phone display ------------ */
	@media (max-width: 320px) {
	}
	/* -------- Tablet display ------------ */

	@media (max-width: 768px) {
	}
`

export default Wrapper
