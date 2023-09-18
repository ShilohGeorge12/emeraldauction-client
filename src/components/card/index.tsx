import { Image } from '@chakra-ui/image';
import { Cars } from '../../types';
import { LoadingCard } from '../loading';
import { useNavigate } from 'react-router-dom';
import { prodUrl, devUrl } from '../../types';

export default function Card({ _id, src, title, price, mileage }: Cars) {
	const naviTo = useNavigate();
	const devUrl: devUrl = 'http://localhost:33001';
	const prodUrl: prodUrl = 'http://localhost:33001';

	return (
		<figure
			className={`rounded-xl bg-white/60 backdrop-blur text-lg flex flex-col gap-2 justify-center duration-500 hover:scale-105 transition ease-in-out hover:shadow-lg hover:shadow-gray-400 p-3 text-green-500 cursor-pointer`}
			onClick={() => naviTo(`/${_id}`)}>
			<Image
				src={import.meta.env.VITE_MODE === 'development' ? `${devUrl}${src[0]}` : `${prodUrl}${src[0]}`}
				title={title}
				alt={title}
				fallback={<LoadingCard />}
				className={`object-cover self-center`}
			/>
			<figcaption className='py-1 text-xl font-semibold text-center transition duration-500 ease-in-out bg-green-100 rounded-lg hover:bg-green-400 hover:text-white hover:scale-105'>
				{title}
			</figcaption>
			<ul className='flex items-center gap-4 list-none'>
				<figcaption className='p-1 px-2 text-lg font-semibold tracking-wider transition duration-500 ease-in-out bg-green-100 rounded-lg w-fit hover:scale-105 hover:text-white hover:bg-green-500'>
					&#x20A6;{price.toLocaleString()}
				</figcaption>
				<figcaption className='p-1 px-2 text-sm tracking-wider text-gray-700 transition duration-500 ease-in-out bg-gray-300 rounded-lg w-fit hover:scale-105 hover:text-white hover:bg-gray-700'>
					{mileage.toLocaleString()} Miles
				</figcaption>
			</ul>
		</figure>
	);
}
