import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProcedureShow extends Component {
	renderTasks() {
		return this.props.activeProcedure.tasks.map(task => {
			return (
				<li className="list-group-item" key={task}>
					{task}
				</li>
			);
		});
	}

	render() {
		let activeProcedure = this.props.activeProcedure;
		if (!activeProcedure) {
			return (
				<div>
					<h3>Please select procedure</h3>
				</div>
			);
		}
		return (
			<div>
				<p>
					<strong>
						Tasks for procedure #{activeProcedure.id}:
					</strong>
				</p>
				<ul className="list-group">
					{this.renderTasks()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ activeProcedure }) {
	return { activeProcedure };
}

export default connect(mapStateToProps)(ProcedureShow);
