import { Image } from '@chakra-ui/image';
import { Cars } from '../../types';
import { LoadingCard } from '../loading';

export default function Card({ src, title, price, mileage }: Cars) {
	return (
		<figure
			className={`rounded-xl bg-white/60 backdrop-blur text-lg flex flex-col gap-2 justify-center duration-500 hover:scale-105 transition ease-in-out hover:shadow-lg hover:shadow-gray-400 p-3 text-green-500 cursor-pointer`}>
			<Image
				src={src}
				title={title}
				alt={title}
				loading='lazy'
				fallback={<LoadingCard />}
				className={`object-cover self-center`}
			/>
			<figcaption className='py-1 text-xl font-semibold text-center transition duration-500 ease-in-out bg-green-100 rounded-lg hover:bg-green-400 hover:text-white hover:scale-105'>
				{title}
			</figcaption>
			<figcaption className='p-1 px-2 text-sm tracking-wider text-gray-700 transition duration-500 ease-in-out bg-gray-300 rounded-lg w-fit hover:scale-105 hover:text-white hover:bg-gray-700'>
				{mileage.toLocaleString()} Miles
			</figcaption>
			<figcaption className='p-1 px-2 text-lg font-semibold tracking-wider transition duration-500 ease-in-out bg-green-100 rounded-lg w-fit hover:scale-105 hover:text-white hover:bg-green-500'>
				&#x20A6;{price.toLocaleString()}
			</figcaption>
		</figure>
	);
}
