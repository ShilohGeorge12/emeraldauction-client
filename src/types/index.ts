export interface contextState {
	cars: Cars[];
}

type contextAction = { type: 'cars'; payload: { cars: Cars[] } };
export type reducerFn = (state: contextState, action: contextAction) => contextState;

export interface Cars {
	readonly _id: string;
	readonly src: string;
	readonly title: string;
	readonly price: number;
	readonly mileage: number;
}
