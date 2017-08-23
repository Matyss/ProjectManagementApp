import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProjectsReducer from './reducer_projects';
import ActiveProjectReducer from './reducer_active_project';
import Procedures from './reducer_procedures';

const rootReducer = combineReducers({
	projects: ProjectsReducer,
	activeProject: ActiveProjectReducer,
	procedures: Procedures,
	form: formReducer
});

export default rootReducer;
