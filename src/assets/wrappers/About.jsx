import styled from 'styled-components'

const Wrapper = styled.section`
	width: 100vw;
	background: grey;

	.page {
		height: 80vh;
		display: grid;
		align-items: center;
	}
	h1 {
		font-weight: 700;
		span {
			color: var(--pink-dark);
		}
	}
	p {
		color: orange;
		padding: 1rem 0;
		line-height: 1.5rem;
		font-size: 1.2rem;
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
			border-radius: 10px;
			display: block;
		}
		img {
			height: 500px;
		}
	}
`
export default Wrapper
