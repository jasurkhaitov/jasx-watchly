import { ModeToggle } from '../theme/mode-toggle'
import { LuContact } from 'react-icons/lu'
import Logo from './Logo'
import ScrollNav from './ScrollNav'
import SearchPanel from '../search/SearchPanel'

export default function MainPageNavbar() {
	return (
		<header className='font-roboto bg-background text-gray-600 fixed top-0 left-0 w-full z-10 dark:text-gray-300 shadow-md dark:shadow-xl px-[15px] lg:px-[15px] pt-5'>
			<div className='flex flex-col max-w-[1920px] mx-auto'>
				<div className='flex items-center justify-between mb-4 px-10'>
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

				<div className='flex w-full flex-col items-center justify-center gap-4 py-2 border-t border-t-gray-300 dark:border-t-gray-800 border-b border-b-white dark:border-b-gray-800'>
					<ScrollNav />
				</div>
			</div>
		</header>
	)
}
