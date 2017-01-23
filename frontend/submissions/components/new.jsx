import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class NewSubmission extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.updateField = this.updateField.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }

    updateField(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleSubmission() {
        this.props.makeSubmission(this.state);
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
                        <input type="text" className="form-control" id="name" placeholder="Full name" required onChange={(e) => this.updateField(e)} />
                    </div>

                    <div className="form-group">
                        <label for="phone">Phone</label>
                        <input type="phone" className="form-control" id="phone" placeholder="Phone" required onChange={(e) => this.updateField(e)} />
                    </div>

                    <div className="form-group">
                        <label for="address">Full Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Full address" required onChange={(e) => this.updateField(e)} />
                    </div>

                    <div className="form-group">
                        <label for="ssn">SSN</label>
                        <input type="password" className="form-control" id="ssn" placeholder="SSN" required onChange={(e) => this.updateField(e)} />
                    </div>

                    <div className="form-group">
                        <label for="income">Yearly Income</label>
                        <input type="decimal" className="form-control" id="income" placeholder="Yearly Income" required onChange={(e) => this.updateField(e)} />
                    </div>

                    <div className="form-group">
                        <label for="credit_score">Credit Score</label>
                        <input type="number" className="form-control" id="credit_score" placeholder="Credit score" required onChange={(e) => this.updateField(e)} />
                    </div>

                    <div className="form-group">
                        <label for="amount">Loan Amount</label>
                        <input type="text" className="form-control" id="amount" placeholder="Loan Amount" required onChange={(e) => this.updateField(e)} />
                    </div>

                        <button onClick={this.handleSubmission} type="submit" className="btn btn-default">Get my rates!</button>
                    </form>
                </div>
                </div>            
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    makeSubmission: payload => dispatch(actions.makeSubmission(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewSubmission);