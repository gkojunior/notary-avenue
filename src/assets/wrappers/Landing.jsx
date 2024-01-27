import styled from 'styled-components'

const Wrapper = styled.section`
	height: 100vh;
	width: 100vw;
	background: url(/src/assets/bg.webp);
	background-repeat: no-repeat;
	background-size:cover;
	color:green;
	text-align: center;
	h1{color:green}
	h1, h2{
		padding-top: 3rem;
	}
	h2,h3{color:black}

	.links{
		display:flex;
		list-style:none;
		justify-content:center;
		padding-top: 2rem;
	
	}
	ul{color:green;}
	li{
		padding:1rem;
		font-size: 1.5rem;
		
	}
	
`
export default Wrapper
