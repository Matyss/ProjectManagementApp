import { SELECT_PROCEDURE } from '../actions';

export default function(state = null, action) {
	switch (action.type) {
		case SELECT_PROCEDURE:
			return action.payload;
		default:
			return state;
	}
	return state;
}
