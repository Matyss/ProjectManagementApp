import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TasksList extends Component {
	renderTasks() {
		return this.props.activeProject.procedures.map(procedure => {
			return procedure.tasks.map(task => {
				return (
					<li className="list-group-item" key={task}>
						{task}
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

export default connect(mapStateToProps)(TasksList);
