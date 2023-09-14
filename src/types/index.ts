export interface contextState {
	str: '';
}

type contextAction = { type: ''; payload: { str: '' } };
export type reducerFn = (state: contextState, action: contextAction) => contextState;

export interface Cars {
	readonly _id: string;
	readonly src: string;
	readonly title: string;
	readonly price: number;
}
