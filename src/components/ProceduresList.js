import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProceduresList extends Component {
	renderProcedures() {
		return this.props.procedures.map(procedure => {
			return (
				<li className="list-group-item" key={procedure.id}>
					{procedure.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col col-md-6">
				{this.renderProcedures()}
			</ul>
		);
	}
}

function mapStateToProps({ procedures }) {
	return { procedures };
}

export default connect(mapStateToProps)(ProceduresList);
