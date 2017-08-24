import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { selectProject } from '../actions';

import ProjectShow from './ProjectShow';

class ProjectsIndex extends Component {
	componentDidMount() {
		// console.log(this.props.projects);
	}

	resetLocalStorage() {
		localStorage.clear();
		window.location.reload();
	}

	renderProjects() {
		return _.map(this.props.projects, project => {
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
				<div className="text-right">
					<Link to="/project/new" className="btn btn-success">
						Add a Project
					</Link>
					<button
						className="btn btn-danger"
						onClick={this.resetLocalStorage.bind(this)}
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

function mapStateToProps({ projects }) {
	return { projects };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex);
