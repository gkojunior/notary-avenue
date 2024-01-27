import { Link } from 'react-router-dom'
import img from '../assets/not-found.svg'
import Wrapper from '../assets/wrappers/Error'

const Error = () => {
	return (
		<Wrapper>
			<div>
				<img src={img} alt='not found' />
				<h3>Ohh! Page Not Found</h3>
				<p>Hey we can't find the page your looking for!</p>
				<Link to='/'>back home</Link>
			</div>
		</Wrapper>
	)
}

export default Error
