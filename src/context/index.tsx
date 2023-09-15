import { useContext, useReducer, createContext } from 'react';
import { Cars, contextAction, contextState, reducerFn } from '../types';

const cars: Cars[] = [
	{
		_id: '1',
		src: ['/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png'],
		price: 6000000,
		title: 'Toyota Rav 4',
		mileage: 11000,
	},
	{
		_id: '2',
		src: ['/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png'],
		price: 8000000,
		title: 'Toyota Rav 4',
		mileage: 3000,
	},
	{
		_id: '3',
		src: ['/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png'],
		price: 8500000,
		title: 'Toyota Rav 4',
		mileage: 1000,
	},
	{
		_id: '4',
		src: ['/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png'],
		price: 6500000,
		title: 'Toyota Rav 4',
		mileage: 12100,
	},
	{
		_id: '5',
		src: ['/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png', '/cars/rav4-400.png'],
		price: 4400000,
		title: 'Toyota Rav 4',
		mileage: 28000,
	},
];

const initState: contextState = {
	cars: cars,
};

const MyContext = createContext({
	state: initState,
	dispatch(_arg: contextAction) {},
});

const reducer: reducerFn = (state, action) => {
	switch (action.type) {
		case 'cars':
			return { ...state, str: action.payload.cars };

		default:
			return state;
	}
};

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
	const [state, dispatch] = useReducer(reducer, initState);
	return <MyContext.Provider value={{ state, dispatch }}>{children}</MyContext.Provider>;
};

export const useMyContext = () => useContext(MyContext);
