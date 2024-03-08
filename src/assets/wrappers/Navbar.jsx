import styled from 'styled-components'

const Wrapper = styled.section`
	width: 100%;
	height: 3vh;
	padding: 30px;
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
	.navbar {
		width: 100%;
		height: 3vh;
		padding: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f8f8f8;
		position: fixed;
		top: 0;
		z-index: 1;
	}
	.navbar .toogle {
		display: none;
	}
	/* -------- Phone display ------------ */
	@media (max-width: 320px) {
	}
	/* -------- Tablet display ------------ */

	@media (max-width: 768px) {
		.navbar {
		/* position: relative; */
		transition: 0.5s height ease-in-out;
		position: fixed;
		top: 0;
		z-index: 1;
	}
	.navbar.expanded {
		height: 100vh;
	}
	.navbar.expanded .links {
		position: absolute;
		top: 120px;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		opacity: 1;
	}
	.navbar.expanded .links li {
		margin: 15px 0;
		font-size: 22px;
	}

	.navbar.expanded .links li a {
		color: rgb(0, 0, 0);
	}
	.navbar .links {
		display: none;
	}
	.navbar .logo {
		position: absolute;
		top: 23px;
		left: 20px;
	}
	.navbar .toogle {
		display: block;
		position: absolute;
		top: 15px;
		right: 20px;
		font-size: 2em;
		color: rgb(76, 162, 0);
	}
	}
`

export default Wrapper
