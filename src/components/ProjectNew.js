import React, { Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProject } from '../actions';

class ProjectNew extends Component {
	onSubmit(values) {
		this.props.createProject(values, () => {
			this.props.history.push('/');
		});
		console.log(values);
	}

	renderField(field) {
		const { meta: { touched, error } } = field; //instead of field.meta.touched / error
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>
					{field.label}
				</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
					placeholder={field.placeholder}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div> // '...' instead of declaring onChange={field.input.onChange} etc.
		);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
							<Field
								label="Project Name"
								name="projectName"
								component={this.renderField}
								placeholder="e.g. Golden Gate construction"
							/>
							<Field
								label="Project Location"
								name="projectLocation"
								component={this.renderField}
								placeholder="e.g. San Francisco"
							/>
							<Field
								label="Start Date"
								name="start"
								component={this.renderField}
								placeholder="e.g. 22/08/2017"
							/>
							<Field
								label="End Date"
								name="end"
								component={this.renderField}
								placeholder="e.g. 22/08/2019"
							/>
							<button type="submit" className="btn btn-success">
								Submit
							</button>
							<Link to="/" className="btn btn-danger">
								Cancel
							</Link>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	if (values.projectName && values.projectName.length < 5) {
		errors.projectName = 'Project name must be at least 5 characters long';
	}
	if (!values.projectName) {
		errors.projectName = 'Please enter a project name';
	}
	if (!values.projectLocation) {
		errors.projectLocation = 'Please provide the location';
	}
	if (!values.start && !values.end) {
		errors.start = 'Please enter date';
		errors.end = 'Please enter date';
	}
	if (values.start && values.start.length !== 10) {
		errors.start = 'Please enter date in given format';
	}
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(connect(null, { createProject })(ProjectNew));
