import { Image } from '@chakra-ui/image';
import Card from '../../components/card';
import { LoadingHomeBG } from '../../components/loading';
import { useMyContext } from '../../context';

export default function Home() {
	const {
		state: { cars },
	} = useMyContext();

	return (
		<section className={`w-full flex flex-col items-center justify-center mb-4`}>
			<div className='flex items-start justify-center w-full lg:justify-end'>
				<Image
					src='/cars/rav4-1024.png'
					alt='__'
					loading='eager'
					className={`w-[90%] lg:w-3/4 object-cover fixed right-1 top-[163px] md:top-auto bg-center -z-10 brightness-125`}
					fallback={<LoadingHomeBG />}
				/>
			</div>
			<div className='md:h-[90vh] h-[40vh] w-full flex justify-start p-1'>
				<p className='text-sm font-semibold text-green-600 lg:text-2xl w-[310px] md:w-[570px] capitalize md:ml-16 px-1 md:px-0'>
					Rev up your dreams with Emerald Leasing Ltd. Welcome to a world of automotive excellence and exclusive auctions, where your journey to owning quality cars
					begins.
				</p>
			</div>
			<div className='grid w-full gap-4 px-4 md:grid-cols-3 md:grid-rows-3'>
				{cars.length > 0 &&
					cars.map((car) => (
						<Card
							key={car._id}
							_id={car._id}
							src={car.src}
							title={car.title}
							price={car.price}
							mileage={car.mileage}
						/>
					))}
			</div>
		</section>
	);
}
