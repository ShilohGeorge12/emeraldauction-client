export interface contextState {
	str: '';
}

type contextAction = { type: ''; payload: { str: '' } };
export type reducerFn = (state: contextState, action: contextAction) => contextState;
