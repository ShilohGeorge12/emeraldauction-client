import NavBar from './components/navBar';
import { AllRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
	return (
		<article className='flex flex-col items-center w-screen h-screen gap-2 font-poppins'>
			<Router>
				<NavBar />
				<div className='overflow-y-scroll'>
					<AllRoutes />
				</div>
			</Router>
		</article>
	);
}
