import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteProject, selectProject } from '../actions';

class ProjectShow extends Component {
	onDelete() {
		const { deleteProject, selectProject } = this.props;

		deleteProject(this.props.activeProject);
		selectProject(null);
	}

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
				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDelete.bind(this)}
				>
					Delete Project
				</button>
			</div>
		);
	}
}

function mapStateToProps({ activeProject }) {
	return { activeProject };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ deleteProject, selectProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
