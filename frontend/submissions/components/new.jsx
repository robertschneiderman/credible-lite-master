import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import { Field, reduxForm } from 'redux-form';


const renderField = ({ input, label, valuee, type, name, placeholder, onChange, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} value={valuee} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class NewSubmission extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.updateField = this.updateField.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }

    updateField(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmission(e) {
        e.preventDefault();
        debugger;
        this.props.makeSubmission(this.props.values);
    }

    render() {
        return(
            <div className="new-submission">
                <div className="page-header">
                <h1>Loan Submission <small>Get your rates!</small></h1>
                </div>

                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <form>
                    <div className="form-group">
                        <label for="name">Full Name</label>
                        <Field name="name" placeholder="Full Name" component={renderField} type="text" required onChange={(e) => this.updateField(e)} />
                    </div>

                    <div className="form-group">
                        <label for="phone">Phone</label>
                        <Field name="phone" placeholder="Phone format: (123) 456-7890" component={renderField} type="text" required onChange={(e) => this.updateField(e)} />
                    </div>

                    <div className="form-group">
                        <label for="address">Full Address</label>
                        <Field name="address" placeholder="Full Address" component={renderField} type="text" required onChange={(e) => this.updateField(e)} />                        
                    </div>

                    <div className="form-group">
                        <label for="ssn">SSN</label>
                        <Field name="ssn" placeholder="SSN" component={renderField} type="password" required onChange={(e) => this.updateField(e)} />                        
                    </div>

                    <div className="form-group">
                        <label for="income">Yearly Income</label>
                        <Field name="income" placeholder="Yearly Income" component={renderField} type="number" required onChange={(e) => this.updateField(e)} />      
                    </div>

                    <div className="form-group">
                        <label for="credit_score">Credit Score</label>
                        <Field name="credit_score" placeholder="Credit Score" component={renderField} type="number" required onChange={(e) => this.updateField(e)} />
                    </div>

                    <div className="form-group">
                        <label for="amount">Loan Amount</label>
                        <Field name="amount" placeholder="Loan Amount" component={renderField} type="number" required onChange={(e) => this.updateField(e)} />
                    </div>

                        <button onClick={(e) => this.handleSubmission(e)} type="submit" className="btn btn-default">Get my rates!</button>
                    </form>
                </div>
                </div>            
            </div>
        );
    }
}

const mapStateToProps = state => ({
    values: state.form.submission.values
});

const mapDispatchToProps = dispatch => ({
    makeSubmission: payload => dispatch(actions.makeSubmission(payload))
});

NewSubmission = connect(mapStateToProps, mapDispatchToProps)(NewSubmission);

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must be at least 3 characters';
  }
  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/i.test(values.phone)) {
    errors.phone = 'Invalid phone number. Must be in format (123) 456-7890';
  }
  if (!values.address) {
    errors.address = 'Required';
  }  
  if (!values.ssn) {
    errors.ssn = 'Required';
  } else if (values.ssn.length !== 9) {
    errors.ssn = 'Invalid ssn number';
  } 
  if (!values.income) {
    errors.income = 'Required';
  }
  if (!values.credit_score) {
    errors.credit_score = 'Required';
  }  
  if (!values.amount) {
    errors.amount = 'Required';
  }       
  return errors;
};

const NewSubmissionForm = reduxForm({form: 'submission', validate})(NewSubmission);

export default NewSubmissionForm;