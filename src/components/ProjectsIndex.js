import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { selectProject } from '../actions';

import ProjectShow from './ProjectShow';
import Header from './Header';

class ProjectsIndex extends Component {
	constructor() {
		super();
		this.state = {
			search: ''
		};
	}

	updateSearch(e) {
		this.setState({ search: e.target.value.substr(0, 15) });
	}

	renderProjects() {
		const arrayProjects = _.values(this.props.projects);

		const filteredProjects = arrayProjects.filter(pro => {
			return (
				pro.projectName
					.toLowerCase()
					.indexOf(this.state.search.toLowerCase()) !== -1
			);
		});

		return _.map(filteredProjects, project => {
			return (
				<li
					className="list-group-item list-group-item-action"
					key={project.id}
					onClick={() => this.props.selectProject(project)}
				>
					{project.projectName}
				</li>
			);
		});
	}

	render() {
		return (
			<div className="container">
				<Header />
				<div>
					<div className="input-group">
						<span className="input-group-addon" id="basic-addon3">
							Search projects
						</span>
						<input
							type="text"
							className="form-control"
							id="basic-url"
							aria-describedby="basic-addon3"
							value={this.state.search}
							onChange={this.updateSearch.bind(this)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col col-md-6" style={colStyle}>
						<h3>Your open projects:</h3>
						<hr />
						<ul className="list-group">
							{this.renderProjects()}
						</ul>
					</div>
					<div className="col col-md-6" style={colStyle}>
						<h3>Active project details:</h3>
						<hr />
						<ProjectShow />
					</div>
				</div>
			</div>
		);
	}
}

const colStyle = {
	marginTop: '40px'
};

function mapStateToProps({ projects }) {
	return { projects };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex);
