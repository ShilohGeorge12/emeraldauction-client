// import { useEffect } from "react";
import { useMyContext } from '../../../context';
import { useParams } from 'react-router-dom';
import { Image } from '@chakra-ui/image';
import { LoadingMainCar } from '../../../components/loading';
import { useEffect, useState } from 'react';
import { UseMetaData } from '../../../hooks/useMetaData';
import { devUrl, prodUrl } from '../../../types';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

export default function Car() {
	const {
		state: { cars },
	} = useMyContext();
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
	const number = 2348151380885;
	const devUrl: devUrl = 'http://localhost:33001';
	const prodUrl: prodUrl = 'http://localhost:33001';
	const [imageSrc, setImageSrc] = useState<number>(0);
	const onForward = () => {
		const maxLen = src.length - 1;
		if (imageSrc === maxLen) {
			setImageSrc(0);
			return;
		}
		setImageSrc((prev) => prev + 1);
	};

	const onBackward = () => {
		if (imageSrc === 0) {
			setImageSrc(src.length - 1);
			return;
		}
		setImageSrc((prev) => prev - 1);
	};

	return (
		<section className={`relative w-full min-h-[70vh] flex flex-col gap-8 p-4 overflow-x-hidden`}>
			<UseMetaData
				title={`${title} | Emerald Leasing Ltd - Quality Cars for Sale and Auctions`}
				description={''}
				urlPath={`/${carId}`}
			/>
			<div className='group relative w-[98%] md:w-[90%] h-[40vh] md:h-[80vh] mx-auto border-2 border-green-500 flex items-center justify-center rounded-2xl transition duration-700 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-green-300 hover:border-green-300'>
				<Image
					src={import.meta.env.VITE_MODE === 'development' ? `${devUrl}${src[imageSrc]}` : `${prodUrl}${src[imageSrc]}`}
					title={title}
					alt={title}
					fallback={<LoadingMainCar />}
					className={`w-full rounded-xl object-cover`}
				/>
				<div className='absolute w-[90%] group-hover:w-[94%] flex items-center justify-between text-2xl md:text-4xl top-[40%]'>
					<button
						type='button'
						name={`move to previous image`}
						className={`p-1 rounded-[50%] text-green-600 bg-green-200 backdrop-blur transition ease-in-out duration-500 hover:scale-125`}
						onClick={onBackward}>
						<AiOutlineArrowLeft />
					</button>
					<button
						type='button'
						name={`move to next image`}
						className={`p-1 rounded-[50%] text-green-600 bg-green-200 backdrop-blur transition ease-in-out duration-500 hover:scale-125`}
						onClick={onForward}>
						<AiOutlineArrowRight />
					</button>
				</div>
			</div>
			<section className='bg-green-100 w-[98%] mx-auto rounded-xl min-h-[30vh] p-2 lg:px-6 lg:py-4 flex flex-col gap-2 justify-center'>
				<h1 className='text-3xl font-semibold text-gray-600 lg:text-4xl '>{title}</h1>
				<ul className='flex items-center gap-4 text-sm list-none lg:text-base'>
					<li className='p-2 tracking-wider text-white bg-green-500 rounded-lg w-fit'>&#x20A6; {price.toLocaleString()}</li>
					<li className='p-2 text-white bg-gray-500 rounded-lg w-fit'>{mileage.toLocaleString()} miles</li>
				</ul>

				<h2 className='flex items-center justify-center w-full h-10 text-xl font-bold text-white transition bg-green-500 rounded-xl'>Contact Us</h2>
				<address className='hidden w-full gap-2 not-italic md:grid md:grid-cols-3 rounded-xl'>
					<section className='flex flex-col gap-2 px-4 py-2 text-white bg-green-500 justify-evenly rounded-xl'>
						<p className='flex gap-2'>
							<strong>Name:</strong> <span className='font-medium tracking-wider'>Mr. OK</span>
						</p>
						<p className='flex gap-1'>
							<strong>Phone:</strong>
							<a
								className='px-2 py-1 tracking-widest transition duration-500 ease-in-out rounded-lg hover:bg-white hover:text-green-600'
								href={`tel:+${number}`}>
								+{number.toString()}
							</a>
						</p>
					</section>
					<section className='flex flex-col gap-2 px-4 py-2 text-white bg-gray-500 justify-evenly rounded-xl'>
						<p className='flex gap-2'>
							<strong>Name:</strong> <span className='font-medium tracking-wider'>Mr. OK</span>
						</p>
						<p className='flex gap-1'>
							<strong>Phone:</strong>
							<a
								className='px-2 py-1 ml-1 tracking-widest transition duration-500 ease-in-out rounded-lg hover:bg-white hover:text-gray-600'
								href={`tel:+${number}`}>
								+{number.toString()}
							</a>
						</p>
					</section>
					<section className='flex flex-col gap-2 px-4 py-2 text-white bg-green-500 justify-evenly rounded-xl'>
						<p className='flex gap-2'>
							<strong>Name:</strong> <span className='font-medium tracking-wider'>Mr. OK</span>
						</p>
						<p className='flex gap-1'>
							<strong>Phone:</strong>
							<a
								className='px-2 py-1 ml-1 tracking-widest transition duration-500 ease-in-out rounded-lg hover:bg-white hover:text-gray-600'
								href={`tel:+${number}`}>
								+{number.toString()}
							</a>
						</p>
					</section>
				</address>
				<a
					href={`tel:+${number}`}
					className='flex p-4 text-white transition duration-500 ease-in-out bg-green-600 rounded-lg md:hidden w-fit hover:bg-green-400 hover:scale-110'>
					Enquire Now - Call Us
				</a>
			</section>
		</section>
	);
}
