import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { selectProject } from '../actions';

import ProjectShow from './ProjectShow';

class ProjectsIndex extends Component {
	constructor() {
		super();
		this.state = {
			search: ''
		};
	}

	componentDidMount() {
		// console.log(this.props.projects);
	}

	resetLocalStorage() {
		localStorage.clear();
		window.location.reload();
	}

	updateSearch(e) {
		this.setState({ search: e.target.value.substr(0, 15) });
	}

	renderProjects() {
		const arrayProjects = _.values(this.props.projects);

		const filteredProjects = arrayProjects.filter(pro => {
			return (
				pro.projectName
					.toLowerCase()
					.indexOf(this.state.search.toLowerCase()) !== -1
			);
		});

		return _.map(filteredProjects, project => {
			return (
				<li
					className="list-group-item"
					key={project.id}
					onClick={() => this.props.selectProject(project)}
				>
					{project.projectName}
				</li>
			);
		});
	}

	render() {
		return (
			<div className="container">
				<div>
					<input
						type="text"
						value={this.state.search}
						onChange={this.updateSearch.bind(this)}
					/>
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
				<div className="row">
					<div className="col col-md-6" style={colStyle}>
						<h3>Your open projects:</h3>
						<hr />
						<ul className="list-group">
							{this.renderProjects()}
						</ul>
					</div>
					<div className="col col-md-6" style={colStyle}>
						<h3>Active project details:</h3>
						<hr />
						<ProjectShow />
					</div>
				</div>
			</div>
		);
	}
}

const colStyle = {
	marginTop: '40px'
};

const btnStyle = {
	margin: '15px 8px'
};

function mapStateToProps({ projects }) {
	return { projects };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex);
