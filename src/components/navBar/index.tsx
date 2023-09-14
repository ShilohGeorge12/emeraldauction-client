import { ChangeEvent } from 'react';
import { SearchBar } from '../searchBar';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Img } from '@chakra-ui/image';
// import { Img } from '@chakra-ui/image';

export default function NavBar() {
	const [searchValue, setSearchValue] = useSearchParams();

	const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === '') {
			setSearchValue({});
			return;
		}
		setSearchValue((prev) => ({ ...prev, q: e.target.value }));
	};

	return (
		<nav className={`w-[90%] h-[110px] flex items-center justify-between gap-4`}>
			<Img
				src='/images/emerald_logo_149.png'
				alt='Emerald Leasing LTD'
				loading='eager'
				className={`w-36 object-cover`}
			/>
			<div className='w-1/2'>
				<SearchBar
					placeholder={`What're You Looking For`}
					value={searchValue.get('q') ?? ''}
					onSearch={onSearch}
					Icon={FaSearch}
				/>
			</div>
		</nav>
	);
}
