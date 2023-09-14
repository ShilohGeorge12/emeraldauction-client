import { Img } from '@chakra-ui/image';

export default function Home() {
	return (
		<section className={`w-full flex flex-col items-center justify-center`}>
			<div className='flex items-start justify-center w-full lg:justify-end'>
				<Img
					src='/cars/rav4-1024.png'
					// srcSet=''
					alt='__'
					loading='eager'
					className={`w-[80%] lg:w-3/4 object-cover fixed right-1 top-[163px] md:top-auto bg-center -z-10 brightness-125`}
				/>
			</div>
			<div className='md:h-[90vh] h-[40vh] w-full flex justify-start p-1'>
				{/* <p className='inline text-sm lg:text-2xl font-semibold text-green-600 w-[150px] md:w-[550px] ml-20 text-justify'>
					Rev up your dreams with Emerald Leasing Ltd. Welcome to a world of automotive excellence and exclusive auctions, where your journey to owning quality cars
					begins.
				</p> */}
				<p className='text-sm font-semibold text-green-600 lg:text-2xl w-[295px] md:w-[570px] capitalize md:ml-16'>
					Rev up your dreams with Emerald Leasing Ltd. Welcome to a world of automotive excellence and exclusive auctions, where your journey to owning quality cars
					begins.
				</p>
			</div>
			<div className='w-full'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum ullam, delectus explicabo quod itaque totam animi non cupiditate! Earum incidunt suscipit
				alias fuga distinctio voluptatem excepturi perspiciatis rerum velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum ullam, delectus
				explicabo quod itaque totam animi non cupiditate! Earum incidunt suscipit alias fuga distinctio voluptatem excepturi perspiciatis rerum velit! Lorem ipsum dolor
				sit amet consectetur adipisicing elit. Sed laborum ullam, delectus explicabo quod itaque totam animi non cupiditate! Earum incidunt suscipit alias fuga distinctio
				voluptatem excepturi perspiciatis rerum velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum ullam, delectus explicabo quod itaque totam
				animi non cupiditate! Earum incidunt suscipit alias fuga distinctio voluptatem excepturi perspiciatis rerum velit! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Sed laborum ullam, delectus explicabo quod itaque totam animi non cupiditate! Earum incidunt suscipit alias fuga distinctio voluptatem excepturi
				perspiciatis rerum velit!
			</div>
		</section>
	);
}
