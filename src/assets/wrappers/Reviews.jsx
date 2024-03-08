import styled from 'styled-components'

const Wrapper = styled.section`
	margin: 0 auto;
	width: 100vw;
	max-width: 80vw;
	position: relative;
	bottom: 0;
	height: 150px;
	overflow: hidden;

	.slide {
		text-align: center;
		position: absolute;
		bottom: 0;
		left: 0;

		width: 100%;
		transition: var(--transition);
	}

	.name {
		font-size: 1.3rem;
		font-weight: 500;
		text-transform: uppercase;
		color: #ffffff;
		margin-bottom: 0.5rem;
	}
	.title {
		text-transform: capitalize;
		color: var(--pink-dark);
		margin-bottom: 0.75rem;
	}
	.text {
		/* max-width: 50em; */
		margin: 0 auto;
		margin-top: 1rem;
		line-height: 2;
		color: var(--pink-dark);
	}
	.prev,
	.next {
		position: absolute;
		bottom: 0;
		background: black;
		color: var(--pink-dark);
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
