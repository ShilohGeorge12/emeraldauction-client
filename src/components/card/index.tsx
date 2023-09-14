import { Image } from '@chakra-ui/image';
import { Cars } from '../../types';
import { LoadingCard } from '../loading';

export default function Card({ _id, src, title, price }: Cars) {
	return (
		<figure
			className={`rounded-xl bg-white/60 backdrop-blur text-lg flex flex-col gap-2 items-center duration-500 hover:scale-105 transition ease-in-out hover:shadow-lg hover:shadow-gray-400 p-2 text-green-500 cursor-pointer`}
			key={_id}>
			<Image
				src={src}
				title={title}
				alt={title}
				loading='lazy'
				fallback={<LoadingCard />}
				className={`object-cover`}
			/>
			<figcaption className='text-xl font-semibold'>{title}</figcaption>
			<figcaption className='text-lg font-semibold'>{price.toLocaleString()}</figcaption>
		</figure>
	);
}
