import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProject } from '../actions';

class ProjectNew extends Component {
	onSubmit(values) {
		this.props.createProject(values, () => {
			this.props.history.push('/');
		});
	}

	renderField(field) {
		const { meta: { touched, error } } = field; //instead of field.meta.touched / error
		const className = `form-control ${touched && error ? 'is-invalid' : ''}`;

		return (
			<div className="from-group">
				<label style={{ marginTop: '20px' }}>
					{field.label}
				</label>
				<input
					className={className}
					type="text"
					{...field.input}
					placeholder={field.placeholder}
				/>
				<div className="text-help invalid-feedback">
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
					<form
						style={formStyle}
						onSubmit={handleSubmit(this.onSubmit.bind(this))}
					>
						<h3>Add new project to your dashboard</h3>
						<hr />
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
							placeholder="e.g. DD/MM/YYYY"
						/>
						<Field
							label="End Date"
							name="end"
							component={this.renderField}
							placeholder="e.g. DD/MM/YYYY"
						/>
						<button type="submit" className="btn btn-success" style={btnStyle}>
							Submit
						</button>
						<Link to="/" className="btn btn-danger" style={btnStyle}>
							Cancel
						</Link>
					</form>
				</div>
			</div>
		);
	}
}

const formStyle = {
	width: '500px',
	margin: '40px auto',
	padding: '30px'
};

const btnStyle = {
	margin: '15px 8px',
	cursor: 'pointer'
};

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
		errors.start = 'Please enter start ate';
		errors.end = 'Please enter end date';
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
