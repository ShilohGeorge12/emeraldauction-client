import NavBar from './components/navBar';
import { AllRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
	return (
		<article className='flex flex-col items-center gap-2 font-poppins scroll-smooth'>
			<Router>
				<NavBar />
				<section className='flex-1 overflow-y-scroll'>
					<AllRoutes />
				</section>
			</Router>
		</article>
	);
}
