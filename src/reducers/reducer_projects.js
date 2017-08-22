import { CREATE_PROJECT } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case CREATE_PROJECT:
			return { ...state, [(action.payload.id = Date.now())]: action.payload };
		default:
			return state;
	}
	return state;
}
