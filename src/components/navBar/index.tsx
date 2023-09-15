import { ChangeEvent } from 'react';
import { SearchBar } from '../searchBar';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';
import { Image } from '@chakra-ui/image';
import { LoadingNavImage } from '../loading';

export default function NavBar() {
	const [searchValue, setSearchValue] = useSearchParams();
	const { pathname } = useLocation();
	const naviTo = useNavigate();

	const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === '') {
			setSearchValue({});
			return;
		}
		setSearchValue((prev) => ({ ...prev, q: e.target.value }));
	};

	return (
		<nav className={`w-full px-2 lg:px-12 h-[105px] flex items-center justify-between gap-4 sticky top-0 left-0 bg-white/50 backdrop-blur z-10`}>
			<Image
				src={'/images/emerald_logo_149.png'}
				alt={'Emerald Leasing LTD'}
				title={'Emerald Leasing LTD'}
				loading={'eager'}
				className={`w-24 md:w-36 object-cover`}
				fallback={<LoadingNavImage />}
			/>
			{pathname === '/' && (
				<div className='flex-1 lg:w-1/2 lg:flex-none'>
					<SearchBar
						placeholder={`What're You Looking For`}
						value={searchValue.get('q') ?? ''}
						onSearch={onSearch}
						Icon={FaSearch}
					/>
				</div>
			)}
			{pathname.split('/')[1].length >= 1 && (
				<button
					type='button'
					name={`back to home`}
					className={`w-fit text-3xl p-2 text-white bg-green-400 rounded-lg -top-2 left-0`}
					onClick={() => naviTo('/')}>
					<FaHome />
				</button>
			)}
		</nav>
	);
}
