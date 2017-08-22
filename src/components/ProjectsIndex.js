import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectsIndex extends Component {
	render() {
		return <div>Hello world!</div>;
	}
}

function mapStateToProps({ projects }) {
	return { projects };
}

export default connect(mapStateToProps)(ProjectsIndex);
