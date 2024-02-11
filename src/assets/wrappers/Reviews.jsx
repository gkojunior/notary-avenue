import styled from 'styled-components'

const Wrapper = styled.section`

	.slider-container {	font-weight: 700;
	margin: 0 auto;
	width: 80vw;
	max-width: 800px;
	position: relative;
	bottom: 0;
	overflow: hidden;
	}
	.slide {
		text-align: center;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100vw;
		transition: var(--transition);
	}

	/* .person-img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		margin-bottom: 1rem;
		object-fit: cover;
		border: 4px solid var(--primary-200);
		box-shadow: var(--shadow-3);
	} */

	.name {
		font-size: 1.3rem;
		font-weight: 500;
		text-transform: uppercase;
		color: #ffffff;
		margin-bottom: 0.5rem;
	}
	.title {
		text-transform: capitalize;
		color: #ffa200;
		margin-bottom: 0.75rem;
	}
	.text {
		/* max-width: 50em; */
		margin: 0 auto;
		margin-top: 1rem;
		line-height: 2;
		color: purple;
	}
	.prev,
	.next {
		position: absolute;
		bottom: 100px;
		background: purple;
		color: #ffa200;
		width: 1.25rem;
		height: 1.25rem;
		display: grid;
		place-items: center;
		border-color: transparent;
		border-radius: var(--borderRadius);
		cursor: pointer;
		transition: var(--transition);
	}
	.prev:hover,
	.next:hover {
		background: orange;
		color: purple;
	}
	.prev {
		left: 0;
	}
	.next {
		right: 0;
	}
	@media screen and (max-width: 800px) {
		.text {
			max-width: 45em;
			font-size: 0.75rem;
		}
		.prev,
		.next {
			width: 2rem;
			height: 2rem;
			font-size: 1.5rem;
		}
	}
	.next-slide {
		transform: translateX(100%);
	}
`
export default Wrapper
