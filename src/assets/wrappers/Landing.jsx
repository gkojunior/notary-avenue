import styled from 'styled-components'

const Wrapper = styled.section`
	height: 100vh;
	width: 100vw;
	background-repeat: no-repeat;
	background-size: cover;
	text-align: left;
	.page {
		height: 80vh;
		display: grid;
		align-items: center;
	}

	h1 {
		font-weight: 700;

		color: #ffa200;
	}

	a {
		padding: 1rem;
		color: purple;
	}
	a:hover {
		color: #ffa200;
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
	left:0;
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

	@media screen and (max-width: 425px) {
		h1,
		p,
		.links {
			font-size: 2rem;

			text-align: center;
		}
		.links {
			font-size: 1.3rem;
			display:grid;
		}

		p {
			font-size: 0.9rem;
		}
		.page {
			grid-template-columns: 1fr;
		}
	}
	/* ---------- Tablet View ------------ */

	@media screen and (min-width: 768px) {
		.links {
			display: flex;
		}
		h1 {
			font-size: 3rem;
		}
	}
	/* ---------- Laptop View ------------ */

	@media screen and (min-width: 1024px) {
		h1 {
			font-size: 4rem;
		}
		.links {
			font-size: 1.2rem;
		}
	}
	@media screen and (min-width: 1025px) {
	}
`
export default Wrapper
