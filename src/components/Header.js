import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	resetLocalStorage() {
		localStorage.clear();
		window.location.reload();
	}

	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-3">Welcome to BuildUp</h1>
					<p className="lead">
						One place to manage all of your great constructing projects.
					</p>
					<Link to="/project/new" className="btn btn-success" style={btnStyle}>
						Add a Project
					</Link>
					<button
						className="btn btn-danger"
						onClick={this.resetLocalStorage.bind(this)}
						style={btnStyle}
					>
						Reset Database
					</button>
				</div>
			</div>
		);
	}
}

const btnStyle = {
	margin: '15px 8px',
	cursor: 'pointer'
};
