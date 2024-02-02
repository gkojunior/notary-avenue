import styled from 'styled-components'

const Wrapper = styled.section`
	height: 100vh;
	width: 100vw;
	background: url(/src/assets/bg5.jpg);
	/* opacity:0.8; */
	background-repeat: no-repeat;
	background-size: cover;
	text-align: left;
	.container,
	
	h1 {
		color: rgb(245, 78, 106);
	}
	span{
		color:rgb(254, 83, 243);
	}
	h2,
	h3 {
		color: black;
	}
	.links {
		display: flex;
		list-style: none;
		padding-top: 1rem;
	}
	ul {
		color: rgb(245, 78, 106);
	}
	li {
		padding: 1rem;
		font-size: 1.5rem;
	}

	/* ---------- Cell phone View ------------ */

	@media screen and (max-width: 425px) {
		h1 {
		padding-top: 2rem;
		font-size: 2rem;
		text-align:center;
	}
	}
	/* ---------- Tablet View ------------ */

	@media screen and (max-width: 768px) {
		h1 {
		padding: 3rem 0 1rem 2rem;
	}
	}
	/* ---------- Laptop View ------------ */

	@media screen and (min-width: 1024px) {
		h1{
			padding-top: 8rem;
			font-size: 4rem;

		}
	}
	@media screen and (min-width: 1025px) {
		h1{
			padding: 10rem 0 1rem 10rem;
		}
		h2{padding-left:10rem}
		h3{padding-left:5rem}
		ul{padding-left:7rem}


	}
`
export default Wrapper
