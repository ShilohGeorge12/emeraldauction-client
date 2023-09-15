import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Car from './pages/home/Car';
import ErrorPage from './components/error';
import NotFound from './pages/notFound';

export function AllRoutes() {
	const location = useLocation();
	return (
		<Routes
			location={location}
			key={location.pathname}>
			<Route
				path='/'
				element={<ErrorPage page={<Home />} />}
			/>
			<Route
				path=':carId'
				element={<ErrorPage page={<Car />} />}
			/>
			<Route
				path='*'
				element={<ErrorPage page={<NotFound />} />}
			/>
		</Routes>
	);
}
