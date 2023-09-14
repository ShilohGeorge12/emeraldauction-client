import { useContext, useReducer, createContext } from 'react';
import { contextState, reducerFn } from '../types';

const initState: contextState = {
	str: '',
};

const MyContext = createContext({
	state: initState,
	dispatch(_arg: {}) {},
});

const reducer: reducerFn = (state, action) => {
	switch (action.type) {
		case '':
			return { ...state, str: action.payload.str };

		default:
			return state;
	}
};

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
	const [state, dispatch] = useReducer(reducer, initState);
	return <MyContext.Provider value={{ state, dispatch }}>{children}</MyContext.Provider>;
};

export const useMyContext = () => useContext(MyContext);
