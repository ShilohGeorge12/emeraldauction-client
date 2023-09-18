import { Image } from '@chakra-ui/image';
import Card from '../../components/card';
import { LoadingHomeBG } from '../../components/loading';
import { useMyContext } from '../../context';
import usePagination from '../../hooks/usePagination';
import { useEffect, useState } from 'react';
import { UseMetaData } from '../../hooks/useMetaData';
import { devUrl, prodUrl } from '../../types';

export default function Home() {
	const {
		state: { cars },
	} = useMyContext();
	const [totalData, setTotalData] = useState<number>(cars.length);
	const limitPerPage = 3;
	const queryKey = 'cars';

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [PaginationNav, paginatedData, _status] = usePagination({
		url: 'cars',
		data: cars,
		limitPerPage,
		queryKey,
		totalData,
		setTotalData,
	});

	const number = '08151380885';
	const DevUrl: devUrl = 'http://localhost:33001';
	const ProdUrl: prodUrl = 'http://localhost:33001';

	return (
		<section className={`w-full flex flex-col items-center justify-center mb-4`}>
			<UseMetaData
				title='Emerald Leasing Ltd - Quality Cars for Sale and Auctions'
				description='Discover a wide selection of quality cars for sale and auction at Emerald Leasing Ltd. Explore our inventory of well-maintained vehicles and find your dream car today'
				urlPath='/'
			/>
			<article
				className='hidden'
				itemScope
				itemType='http://schema.org/Article'>
				<h1 itemProp='headline'>Welcome to Emerald Leasing Ltd: Your Premier Destination for Car Sales and Auctions</h1>
				<p itemProp='description'>
					Emerald Leasing Ltd is your gateway to the world of premium car sales and thrilling auctions. Our mission is simple: to provide you with a one-stop platform
					where you can find quality used cars and affordable vehicles that suit your preferences and budget.
				</p>
				<h2 itemProp='name'>Quality Used Cars: Your Road to Reliability</h2>
				<p itemProp='articleBody'>
					At Emerald Leasing Ltd, we understand that buying a car is a significant investment, and you deserve nothing but the best. That's why we meticulously curate our
					inventory to bring you an array of quality used cars that are reliable and well-maintained. Whether you're looking for a compact sedan, a spacious SUV, or a
					stylish coupe, we have a diverse range of makes and models to cater to your needs.
				</p>
				<h3 itemProp='name'>Affordable Vehicles for Every Budget</h3>
				<p itemProp='articleBody'>
					that provide excellent value for your money. Our pricing is competitive, and our financing options make it easier than ever to drive home in your dream car. We
					believe that everyone should have the opportunity to own a reliable vehicle without breaking the bank. That's why we offer a selection of affordable vehicles
				</p>
				<h3 itemProp='name'>Luxury at Your Fingertips</h3>
				<p itemProp='articleBody'>
					For those with a taste for the finer things in life, our inventory includes luxury cars that exude elegance and sophistication. Experience the thrill of driving
					a high-end vehicle without the hefty price tag. From sleek Mercedes-Benz sedans to powerful BMW SUVs, we have the luxury car you've been dreaming of.
				</p>
				<h3 itemProp='headline'>Join the Excitement of Our Auctions</h3>
				<p itemProp='articleBody'>
					If you're seeking a unique and exhilarating car-buying experience, look no further than our auctions. Emerald Leasing Ltd hosts regular auctions where you can
					bid on a wide range of vehicles. Whether you're a seasoned auction-goer or a first-time bidder, our auctions provide an electrifying atmosphere where you can
					secure fantastic deals on your next car.
				</p>
				<h3 itemProp='headline'>Hassle-Free Car Shopping</h3>
				<p itemProp='articleBody'>
					We understand that the car-buying process can be overwhelming, but at Emerald Leasing Ltd, we've made it hassle-free. Our user-friendly website allows you to
					browse our inventory with ease. Detailed listings provide you with comprehensive information about each vehicle, including specifications, pricing, and
					high-resolution images.
				</p>
				<h3 itemProp='name'>Discover Your Perfect Ride Today</h3>
				<p itemProp='articleBody'>
					Your dream car is just a click away. Explore our website to find the perfect vehicle that matches your style and needs. Whether you're searching for a reliable
					daily driver or a weekend getaway car, Emerald Leasing Ltd has you covered.
				</p>
				<h3 itemProp='name'>Contact Us</h3>
				<p itemProp='articleBody'>Have questions or need assistance? Our friendly team is here to help. Contact us at {number} or visit our dealership at</p>
				<div
					itemProp='publisher'
					itemScope
					itemType='http://schema.org/Organization'>
					<span itemProp='name'>Emerald Leasing Ltd</span>
					<div
						itemProp='address'
						itemScope
						itemType='http://schema.org/PostalAddress'>
						<span itemProp='streetAddress'>30A Providence St, Lekki</span>,<span itemProp='addressLocality'>Lekki</span>,<span itemProp='addressRegion'>Lagos</span>
						<span itemProp='postalCode'>106104</span>,<span itemProp='addressCountry'>Nigeria</span>
					</div>
					<a
						href={`tel:${number}`}
						itemProp='telephone'>
						{number}
					</a>
				</div>
				to see our vehicles in person.
				<h3 itemProp='name'>Follow Us on Social Media</h3>
				<p itemProp='articleBody'>
					Stay updated with the latest arrivals, special promotions, and auction announcements by following us on social media. Connect with us on [Insert Social Media
					URLs] to join our online community. Emerald Leasing Ltd is your trusted partner in the world of car sales and auctions. With a commitment to quality,
					affordability, and an exciting shopping experience, we invite you to embark on a journey to find the car of your dreams. Explore our website today and make your
					next car purchase an unforgettable adventure.
				</p>
			</article>
			<div className='flex items-start justify-center w-full lg:justify-end'>
				<Image
					src={import.meta.env.VITE_MODE === 'development' ? `${DevUrl}/cars/rav4-1024.png` : `${ProdUrl}/cars/rav4-1024.png`}
					alt='__'
					className={`w-[90%] lg:w-3/4 object-cover fixed right-1 top-[163px] md:top-auto bg-center -z-10 brightness-125`}
					fallback={<LoadingHomeBG />}
				/>
			</div>
			<div className='md:h-[90vh] h-[40vh] w-full flex justify-start p-1'>
				<p className='text-sm font-semibold text-green-600 md:text-2xl w-[310px] md:w-[570px] capitalize md:ml-16 px-1 md:px-0'>
					Rev up your dreams with Emerald Leasing Ltd. Welcome to a world of automotive excellence and exclusive auctions, where your journey to owning quality cars
					begins.
				</p>
			</div>
			<div className='grid w-full gap-4 px-4 md:grid-cols-3 md:grid-rows-3'>
				{paginatedData.length > 0 &&
					paginatedData.map((car) => (
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
			<div className='mt-6'>
				<PaginationNav />
			</div>
		</section>
	);
}
