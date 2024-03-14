import styled from 'styled-components'

const Wrapper = styled.section`
	height: 100vh;
	width: 100vw;
	background: grey;
	.title {
		padding-top: 4rem;
	}
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
		padding: 1rem 0;
		line-height: 1.5rem;
		font-size: 1.2rem;
	}
	.main-img {
		display: block;
	}
	/* ---------- Cell phone View ------------ */

	@media screen and (max-width: 425px) {
		.title {
			padding-top: 2rem;
		}
	}
	/* ---------- Tablet View ------------ */

	@media screen and (max-width: 768px) {
		img {
			height: 15rem;
			justify-content: center;
		}
	}
	/* ---------- Laptop View ------------ */
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
