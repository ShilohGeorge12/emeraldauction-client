import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function NotFound() {
	const naviTo = useNavigate();

	return (
		<motion.section
			className={`w-full h-[50vh] flex flex-col items-center justify-center gap-8`}
			initial={{ opacity: 0, translateY: '-100vh', translateZ: -100 }}
			animate={{ opacity: 1, translateX: '0vw', translateY: '0vh', translateZ: 0 }}
			exit={{ opacity: 0, translateZ: -100 }}
			transition={{ type: 'spring', damping: 7, stiffness: 100 }}>
			<p className='flex items-center justify-center w-3/6 gap-3 rounded-md text-emerald-700 bg-emerald-200 h-28'>
				<span className='text-2xl font-semibold'>404</span>
				<span className='text-3xl font-semibold'>|</span>
				<span className='text-2xl font-semibold'>Page Not Found</span>
			</p>

			<button
				type='button'
				onClick={() => naviTo('/')}
				title='Back To Home'
				className='p-2 text-white transition duration-500 ease-in-out rounded-lg bg-emerald-500 hover:bg-emerald-600 hover:scale-110'>
				Back To Home
			</button>
		</motion.section>
	);
}

export default NotFound;
