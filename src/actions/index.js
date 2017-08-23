export const CREATE_PROJECT = 'CREATE_PROJECT';
export const SELECT_PROJECT = 'SELECT_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

export function createProject(project, callback) {
	callback();
	return {
		type: CREATE_PROJECT,
		payload: project
	};
}

export function selectProject(project) {
	return {
		type: SELECT_PROJECT,
		payload: project
	};
}

export function deleteProject(project) {
	return {
		type: DELETE_PROJECT,
		payload: project
	};
}
