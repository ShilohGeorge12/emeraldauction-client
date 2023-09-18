import { Dispatch, SetStateAction } from 'react';

export type devUrl = 'http://localhost:33001';
export type prodUrl = 'http://localhost:33001';

export interface contextState {
	cars: Cars[];
}

export type contextAction = { type: 'cars'; payload: { cars: Cars[] } };
export type reducerFn = (state: contextState, action: contextAction) => contextState;

export interface Cars {
	readonly _id: string;
	readonly src: string[];
	readonly title: string;
	readonly price: number;
	readonly mileage: number;
}

type method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type responseTypes = Cars | Cars[];
export type useFetchType = (endPoint: string, method: method, cache: RequestCache, body?: FormData) => Promise<responseTypes>;

export const isCar = (arg: responseTypes): arg is Cars => {
	return arg && 'title' in arg && 'src' in arg && 'price' in arg && 'price' in arg && 'mileage' in arg && '_id' in arg;
};
export const isCars = (arg: responseTypes): arg is Cars[] => {
	return arg && Array.isArray(arg);
};

// Pagination Types
interface PaginationOptions {
	url: string;
	queryKey: string;
	data: any[];
	limitPerPage: number;
	totalData: number;
	setTotalData: Dispatch<SetStateAction<number>>;
}
export type fetchPaginationStatus = 'error' | 'success' | 'loading';
export type PaginationType = (options: PaginationOptions) => [() => JSX.Element, any[], fetchPaginationStatus];
