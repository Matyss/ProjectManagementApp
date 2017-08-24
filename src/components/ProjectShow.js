import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteProject, selectProject } from '../actions';

import ProceduresList from './ProceduresList';

class ProjectShow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isHidden: true
		};
	}

	toggleHidden() {
		this.setState({
			isHidden: !this.state.isHidden
		});
	}

	onDelete() {
		const { deleteProject, selectProject } = this.props;

		deleteProject(this.props.activeProject);
		selectProject(null);
	}

	componentDidMount() {
		this.props.selectProject(null);
	}

	renderProcedure() {
		return this.props.activeProject.procedures.map(procedure => {
			return (
				<li className="list-group-item" key={procedure.id}>
					{procedure.title}
				</li>
			);
		});
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
					Project Name: <strong>{activeProject.projectName}</strong>
				</p>
				<p>
					Project Location: <strong>{activeProject.projectLocation}</strong>
				</p>
				<p>
					Start Date: <strong>{activeProject.start}</strong>
				</p>
				<p>
					End Date: <strong>{activeProject.end}</strong>
				</p>
				<p>Added procedure:</p>
				<ul className="list-group">
					{this.renderProcedure()}
				</ul>
				<button
					className="btn btn-warning"
					onClick={this.toggleHidden.bind(this)}
				>
					Add Procedures
				</button>
				<button className="btn btn-danger" onClick={this.onDelete.bind(this)}>
					Delete Project
				</button>
				<hr />
				{!this.state.isHidden && <ProceduresList />}
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
