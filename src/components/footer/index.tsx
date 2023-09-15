import { Image } from '@chakra-ui/image';
import { LoadingNavImage } from '../loading';

export const Footer = () => {
	return (
		<footer className='w-full min-h-[80px] bg-black/70 backdrop-blur py-2 px-4 flex flex-col gap-4 items-center text-white'>
			<div className='flex items-center justify-between w-full'>
				<Image
					src={'/images/emerald_logo_149.png'}
					alt={'Emerald Leasing LTD'}
					loading={'eager'}
					className={`w-24 md:w-36 object-cover hover:bg-white transition ease-in-out duration-500 hover:scale-105 brightness-100 rounded-xl p-2`}
					fallback={<LoadingNavImage />}
				/>
				<a
					href='https://emeraldgroupng.com'
					title='Emerald Leasing Ltd Website'
					className='text-xl font-semibold transition duration-300 ease-in-out rounded-lg hover:p-2 hover:scale-105 hover:bg-white hover:text-green-600'
					target='_blank'
					rel='noopener noreferrer'>
					Visit Our Website
				</a>
			</div>
			<address className='w-full text-sm not-italic md:text-base'>
				<h3 className='text-lg font-semibold md:text-2xl'>Contact</h3>
				30A Providence Street Lekki Phase 1 Lekki, Lagos
			</address>
			<p className='text-xs font-semibold tracking-widest md:text-lg'>©2023. Emerald Leasing Limited. All Rights Reserved.</p>
		</footer>
	);
};
