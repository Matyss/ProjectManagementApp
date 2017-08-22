import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectShow extends Component {
	render() {
		let activeProject = this.props.activeProject;

		if (!activeProject) {
			return (
				<div>
					<h3>Please select project to get information</h3>
				</div>
			);
		}

		return (
			<div>
				<p>
					Project Name: {activeProject.projectName}
				</p>
				<p>
					Project Location: {activeProject.projectLocation}
				</p>
				<p>
					Start Date: {activeProject.start}
				</p>
				<p>
					End Date: {activeProject.end}
				</p>
				<button className="btn btn-danger pull-xs-right">Delete Project</button>
			</div>
		);
	}
}

function mapStateToProps({ activeProject }) {
	return { activeProject };
}

export default connect(mapStateToProps)(ProjectShow);
