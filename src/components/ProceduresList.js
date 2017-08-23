import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProcedure } from '../actions';

import ProcedureShow from './ProcedureShow';

class ProceduresList extends Component {
	onAttach() {
		this.props.attachProcedure(
			this.props.activeProcedure,
			this.props.activeProject
		);
	}

	renderProcedures() {
		return this.props.procedures.map(procedure => {
			return (
				<li
					className="list-group-item"
					key={procedure.id}
					onClick={() => this.props.selectProcedure(procedure)}
				>
					{procedure.title}
				</li>
			);
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col col-md-6">
					<ul className="list-group">
						{this.renderProcedures()}
					</ul>
				</div>
				<div className="col col-md-6">
					<ProcedureShow />
					<button
						className="btn btn-xs btn-info"
						style={{ marginTop: '20px' }}
						onClick={this.onAttach.bind(this)}
					>
						Attach to project
					</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ procedures, activeProcedure, activeProject }) {
	return { procedures, activeProcedure, activeProject };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectProcedure }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProceduresList);
