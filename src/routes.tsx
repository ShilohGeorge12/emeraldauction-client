import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';

export function AllRoutes() {
	const location = useLocation();
	return (
		<Routes
			location={location}
			key={location.pathname}>
			<Route
				path='/'
				element={<Home />}
			/>
		</Routes>
	);
}
