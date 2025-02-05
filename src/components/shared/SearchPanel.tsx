import * as React from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'

export default function SearchPanel() {
	const [isActive, setIsActive] = React.useState(false)
	const [searchQuery, setSearchQuery] = React.useState('')
	const inputRef = React.useRef<HTMLInputElement>(null)

	const navigate = useNavigate()

	const handleFocus = () => {
		setIsActive(true)
	}

	const handleBlur = () => {
		if (searchQuery === '') {
			setIsActive(false)
		}
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		if (searchQuery.trim()) {
			navigate(`/search/${searchQuery}`)
		}
	}

	return (
		<form onSubmit={handleSubmit} className='relative'>
			<Input
				type='text'
				placeholder={isActive ? 'Search...' : ''}
				value={searchQuery}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				ref={inputRef}
				className={cn(
					'h-10 w-10 rounded-sm bg-secondary px-4 transition-all duration-300 ease-in-out focus:outline-none',
					isActive && '2xl:w-96 w-80 pr-9'
				)}
			/>
			<button
				type='submit'
				className='absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-foreground'
				onClick={() => inputRef.current?.focus()}
			>
				<Search className='h-4 w-4' />
				<span className='sr-only'>Search</span>
			</button>
		</form>
	)
}
