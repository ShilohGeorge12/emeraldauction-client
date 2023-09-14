import { Img } from '@chakra-ui/image';

export default function Home() {
	return (
		<section className={`w-full flex flex-col items-center justify-center`}>
			<div className='flex justify-center w-full'>
				<Img
					src='/cars/rav4-1024.png'
					// srcSet=''
					alt='__'
					loading='eager'
					className={`w-3/4 object-cover mx-auto fixed bg-center -z-10 brightness-125`}
				/>
			</div>
			<div className='h-[90vh] w-full'>
				<h2 className='text-2xl font-bold text-green-600 w-[300px] md:w-[600px] self-start ml-20 text-justify'>
					Rev up your dreams with Emerald Leasing Ltd. Welcome to a world of automotive excellence and exclusive auctions, where your journey to owning quality cars
					begins.
				</h2>
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
