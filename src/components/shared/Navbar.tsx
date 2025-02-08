import { ModeToggle } from '../theme/mode-toggle'
import { LuContact } from 'react-icons/lu'
import Logo from './Logo'
import SearchPanel from '../search/SearchPanel'

export default function Navbar() {
	return (
		<header className='font-roboto bg-background text-gray-600 fixed top-0 left-0 w-full z-10 dark:text-gray-300 shadow-md dark:shadow-xl border-b border-transparent dark:border-gray-800'>
			<div className='px-[15px] lg:px-[15px] flex justify-between py-4 items-center max-w-[1920px] mx-auto'>
				<Logo />

				<nav className='flex items-center space-x-3 sm:space-x-5'>
					<SearchPanel />

					<a
						href='http://t.me/jasurkhaitov'
						target='_blank'
						className='p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-200'
					>
						<LuContact className='text-xl text-gray-700 dark:text-gray-300' />
					</a>

					<ModeToggle />
				</nav>
			</div>
		</header>
	)
}
