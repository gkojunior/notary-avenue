import styled from 'styled-components'

const Wrapper = styled.section`
	h1{text-align:center;
	margin-bottom:1rem;}		
	.page {
		display: grid;
		align-items: center;
		background-color:#e4e4e4cc;
padding:2rem;	}
	.main-img {
		display: none;
	}
	.message{text-align:center;
	padding:1rem;}
	@media (min-width: 992px) {
		.page {
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
		}
		.main-img {
			border-radius: 10px;
			display: block;
		}
	}
`
export default Wrapper
