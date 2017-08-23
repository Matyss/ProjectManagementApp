import _ from 'lodash';

import { CREATE_PROJECT, DELETE_PROJECT } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case CREATE_PROJECT:
			return {
				...state,
				[(action.payload.id = Date.now())]: {
					projectName: action.payload.projectName,
					projectLocation: action.payload.projectLocation,
					start: action.payload.start,
					end: action.payload.end,
					id: action.payload.id,
					procedures: []
				}
			};
		case DELETE_PROJECT:
			return _.omit(state, action.payload.id);
		default:
			return state;
	}
	return state;
}
