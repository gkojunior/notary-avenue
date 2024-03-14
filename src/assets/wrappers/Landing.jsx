import styled from 'styled-components'

const Wrapper = styled.section`
	width: 100vw;
	height: 100vh;
	background-size: cover;
	text-align: left;

	.page {
		display: grid;
		align-items: center;
	}
	h1 {
		font-weight: 700;
		color: var(--pink-dark);
	}
	a {
		padding: 1rem;
		color: var(--pink-dark);
	}
	a:hover {
		color: var(--pink);
	}
	p {
		padding: 0.5rem;
		font-weight: 700;
	}
	.main-img {
		display: none;
	}
	.bg {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		object-fit: cover;
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

	/* ---------- Cell phone View ------------ */

	@media screen and (max-width: 767px) {
		h1 {
			padding-top: 2rem;
			font-size: 3rem;
		}
		h1,
		p,
		.links {
			font-size: 1.5rem;
			display: grid;
			text-align: center;
		}
		h1 {
			padding-top: 2rem;
			font-size: 2rem;
		}
		p {
			font-size: 0.9rem;
		}
		.page {
			grid-template-columns: 1fr;
		}
		.slider {
			padding-top: 9rem;
		}
	}
	/* ---------- Tablet View ------------ */

	@media screen and (min-width: 768px) {
		.page {
			height: 70vh;
			text-align: center;
		}
		.links {
			display: flex;
			justify-content: center;
		}
		h1 {
			font-size: 3rem;
		}
	}
	/* ---------- Laptop View ------------ */

	@media screen and (min-width: 1024px) {
		.page {
			height: 70vh;
		}
		h1 {
			font-size: 4rem;
		}
		.links {
			font-size: 1.2rem;
		}
	}
`
export default Wrapper
