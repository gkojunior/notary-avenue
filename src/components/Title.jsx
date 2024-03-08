import Wrapper from '../assets/wrappers/Title'

const Title = ({ title, subTitle }) => {
	return (
		<Wrapper className='section-title'>
			<h2>
				{title} <span>{subTitle}</span>
				<div className='underline'></div>
			</h2>
		</Wrapper>
	)
}
export default Title
