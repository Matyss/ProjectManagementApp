import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteProject, selectProject, selectProcedure } from '../actions';

import ProceduresList from './ProceduresList';
import TasksList from './TasksList';

class ProjectShow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isProcedureHidden: true,
			isTaskHidden: true,
			hover: false
		};
	}

	toggleHidProcedure() {
		this.setState({
			isProcedureHidden: !this.state.isProcedureHidden
		});
		this.props.selectProcedure(null);
	}

	toggleHidTask() {
		this.setState({
			isTaskHidden: !this.state.isTaskHidden
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

	toggleHover() {
		this.setState({ hover: !this.state.hover });
	}

	render() {
		let activeProject = this.props.activeProject;
		if (!activeProject) {
			return (
				<div>
					<h6>Please select project to get information</h6>
				</div>
			);
		}

		let liStyle = {};
		if (this.state.hover) {
			liStyle = { backgroundColor: '#eee', cursor: 'pointer' };
		} else {
			liStyle = { backgroundColor: '#fff' };
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
					<li
						className="list-group-item"
						style={liStyle}
						onClick={this.toggleHidTask.bind(this)}
						onMouseEnter={this.toggleHover.bind(this)}
						onMouseLeave={this.toggleHover.bind(this)}
					>
						{activeProject.procedures[0]
							? activeProject.procedures[0].title
							: 'No active procedures'}
					</li>
				</ul>
				<div>
					{!this.state.isTaskHidden && <TasksList />}
				</div>
				<button
					className="btn btn-success"
					onClick={this.toggleHidProcedure.bind(this)}
					style={btnStyle}
				>
					Add Procedures
				</button>
				<button
					className="btn btn-danger"
					style={btnStyle}
					onClick={this.onDelete.bind(this)}
				>
					Delete Project
				</button>
				<hr />
				{!this.state.isProcedureHidden && <ProceduresList />}
			</div>
		);
	}
}

const btnStyle = {
	margin: '15px 8px',
	cursor: 'pointer'
};

function mapStateToProps({ activeProject }) {
	return { activeProject };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ deleteProject, selectProject, selectProcedure },
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
