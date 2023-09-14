import { ChangeEvent } from 'react';
import { IconType } from 'react-icons';

interface SearchBarProps {
	value: string;
	onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
	Icon: IconType;
	placeholder: string;
}

export const SearchBar = ({ value, placeholder, onSearch, Icon }: SearchBarProps) => {
	return (
		<div className='relative flex flex-col items-center w-full mx-auto my-2 group h-fit'>
			<input
				type='text'
				name='search'
				id='search'
				placeholder={placeholder}
				value={value}
				onChange={onSearch}
				className='w-full h-12 px-3 text-xl font-semibold tracking-wider text-green-500 border-2 border-white shadow-xl rounded-xl shadow-black/10 group-hover:shadow-green-300 group-hover:border-green-300 outline-0 placeholder:text-green-400'
			/>
			<span className='absolute text-xl top-[13px] right-3 text-gray-500 group-hover:text-green-400'>
				<Icon />
			</span>
		</div>
	);
};
