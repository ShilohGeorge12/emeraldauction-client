// import { useEffect } from "react";
import { useMyContext } from '../../../context';
import { useNavigate, useParams } from 'react-router-dom';
import { Image } from '@chakra-ui/image';
import { LoadingMainCar, LoadingOtherCar } from '../../../components/loading';
import { FaHome } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Car() {
	const {
		state: { cars },
	} = useMyContext();
	const naviTo = useNavigate();
	const { carId } = useParams();
	const car = cars.find((car) => car._id === carId) ?? 'undefined';

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (car === 'undefined') {
		return (
			<section className={`w-full min-h-[30vh]`}>
				<h2>'Car Not Found!'</h2>
			</section>
		);
	}

	const { mileage, src, price, title } = car;
	const number = '08151380885';

	return (
		<section className={`relative w-full min-h-[70vh] flex flex-col gap-2 p-4 overflow-x-hidden`}>
			<button
				type='button'
				name={`back to home`}
				className={`w-fit text-sm p-2 text-white bg-green-400 rounded-lg -top-2 left-0`}
				onClick={() => naviTo('/')}>
				<FaHome />
			</button>
			<section className='grid w-full grid-cols-1 lg:grid-cols-3'>
				<Image
					src={src[0]}
					title={title}
					alt={title}
					loading='lazy'
					fallback={<LoadingMainCar />}
					className={`w-full col-span-2 rounded-xl object-cover border-2 border-green-500`}
				/>
				<div className='flex flex-col items-center w-full justify-evenly'>
					<Image
						src={src[1]}
						title={title}
						alt={title}
						loading='lazy'
						className='w-[90%] object-cover rounded-xl'
						fallback={
							<LoadingOtherCar
								width='w-[323px]'
								height='h-[213px]'
							/>
						}
					/>
					<Image
						src={src[2]}
						title={title}
						alt={title}
						loading='lazy'
						className='w-[90%] object-cover rounded-xl'
						fallback={
							<LoadingOtherCar
								width='w-[323px]'
								height='h-[213px]'
							/>
						}
					/>
				</div>
			</section>
			<div className='flex items-center w-full gap-4 justify-evenly'>
				<Image
					src={src[3]}
					title={title}
					alt={title}
					loading='lazy'
					className='object-cover w-[30%] rounded-xl'
					fallback={
						<LoadingOtherCar
							width='w-[323px]'
							height='h-[213px]'
						/>
					}
				/>
				<Image
					src={src[4]}
					title={title}
					alt={title}
					loading='lazy'
					className='object-cover w-[30%] rounded-xl'
					fallback={
						<LoadingOtherCar
							width='w-[323px]'
							height='h-[213px]'
						/>
					}
				/>
				<Image
					src={src[5]}
					title={title}
					alt={title}
					loading='lazy'
					className='object-cover w-[30%] rounded-xl'
					fallback={
						<LoadingOtherCar
							width='w-[323px]'
							height='h-[213px]'
						/>
					}
				/>
			</div>
			<section className='bg-green-100 w-[98%] mx-auto rounded-xl min-h-[30vh] p-2 lg:px-6 flex flex-col gap-2 justify-center'>
				<h3 className='text-3xl font-semibold text-gray-600 lg:text-4xl '>{title}</h3>
				<ul className='flex items-center gap-4 text-sm list-none lg:text-base'>
					<li className='p-2 tracking-wider text-white bg-green-500 rounded-lg w-fit'>&#x20A6; {price.toLocaleString()}</li>
					<li className='p-2 text-white bg-gray-500 rounded-lg w-fit'>{mileage.toLocaleString()} miles</li>
				</ul>

				<a
					href={`tel:${number}`}
					className='p-4 text-white transition duration-500 ease-in-out bg-green-600 rounded-lg w-fit hover:bg-green-400 hover:scale-110'>
					Enquire Now - Call Us
				</a>
			</section>
		</section>
	);
}
