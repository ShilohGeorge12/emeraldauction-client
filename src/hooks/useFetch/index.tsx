import { responseTypes, useFetchType } from '../../types';

export const useFetch: useFetchType = async (endPoint, method, cache, body) => {
	let url: string = '';
	const serversPort = 5001;
	const locaHostUrl = `http://localhost:${serversPort}/api/${endPoint}`;
	const testingUrl = `http://192.168.0.1:${serversPort}/api/${endPoint}`;
	const productionUrl = `https://emeraldattendance.onrender.com/api/${endPoint}`;

	if (import.meta.env.VITE_MODE === 'development') {
		url = locaHostUrl;
	}

	if (import.meta.env.VITE_MODE === 'production') {
		url = productionUrl;
	}

	if (import.meta.env.VITE_MODE === 'testing') {
		url = testingUrl;
		console.log(url);
	}

	let options: RequestInit = {
		cache,
		method,
		credentials: 'include',
	};

	if (method === 'POST' || method === 'PUT') {
		options.body = body;
	}

	const request = await fetch(url, options);
	const response = (await request.json()) as responseTypes;
	return response;
};
