import styled from 'styled-components'

const Wrapper = styled.section`
	height: 100vh;
	width: 100vw;
	.page {
		height: 80vh;
		display: grid;
		align-items: center;
	}
	h1 {
		font-weight: 700;
		span {
			color: pink;
		}
	}
	p {
		color: orange;
	}
	.main-img {
		display: none;
	}
	@media (min-width: 992px) {
		.page {
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
		}
		.main-img {
			border-radius:10px;
			display: block;
		}
		img{
			height: 500px;
		}
	}
`
export default Wrapper
