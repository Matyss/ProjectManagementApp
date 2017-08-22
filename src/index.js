import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import persistState from 'redux-localstorage';

import ProjectsIndex from './components/ProjectsIndex';
import ProjectNew from './components/ProjectNew';
import reducers from './reducers';

const enhancer = compose(persistState());

const createStoreWithMiddleware = applyMiddleware()(createStore);

const NoMatch = () =>
	<div>
		<h3>Sorry, page not found - famous 404</h3>
	</div>;

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers, enhancer)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/project/new" component={ProjectNew} />
					<Route path="/" exact component={ProjectsIndex} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
