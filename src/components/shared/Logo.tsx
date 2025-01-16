import { Link } from 'react-router-dom'
import LogoIcon from '../../assets/svg/logoIcon.svg'

export default function Logo() {
	return (
		<Link to='/' className='flex items-center gap-0 sm:gap-2 text-gray-900 dark:text-white'>
			<img loading='lazy' className='w-10' src={LogoIcon} alt='JasX Brand' />

			<span className='text-xl font-space font-bold'>JasX</span>
		</Link>
	)
}
