import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTask } from '../actions';

class TasksList extends Component {
	renderTasks() {
		return this.props.activeProject.procedures.map(procedure => {
			return procedure.tasks.map(task => {
				return (
					<li
						className="list-group-item"
						key={task.name}
						onClick={() => console.log(task)}
					>
						{task.name}
					</li>
				);
			});
		});
	}

	render() {
		return (
			<ul className="list-group">
				{this.renderTasks()}
			</ul>
		);
	}
}

function mapStateToProps({ activeProject }) {
	return { activeProject };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleTask }, dispatch);
}

export default connect(mapStateToProps)(TasksList);
