import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProjectsIndex extends Component {
	componentDidMount() {
		console.log(this.props.projects);
	}

	renderProjects() {
		return _.map(this.props.projects, project => {
			return (
				<li className="list-group-item" key={project.id}>
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
				</div>
				<div className="rows">
					<div className="col-lg-6 col-md-6">
						<h3>Your open projects:</h3>
						<hr />
						<ul className="list-group">
							{this.renderProjects()}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ projects }) {
	return { projects };
}

export default connect(mapStateToProps)(ProjectsIndex);
