import React, {Component} from 'react';

class NewSubmission extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    updateField(field) {

    }

    render() {
        return(
            <div className="new-submission">
                <div class="page-header">
                <h1>Loan Submission <small>Get your rates!</small></h1>
                </div>

                <div class="row">
                <div class="col-lg-4 col-md-6">
                    <form>
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Full name" required />
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="phone" class="form-control" id="phone" placeholder="Phone" required />
                    </div>

                    <div class="form-group">
                        <label for="address">Full Address</label>
                        <input type="text" class="form-control" id="address" placeholder="Full address" required />
                    </div>

                    <div class="form-group">
                        <label for="ssn">SSN</label>
                        <input type="password" class="form-control" id="ssn" placeholder="SSN" required />
                    </div>

                    <div class="form-group">
                        <label for="income">Yearly Income</label>
                        <input type="decimal" class="form-control" id="income" placeholder="Yearly Income" required />
                    </div>

                    <div class="form-group">
                        <label for="credit_score">Credit Score</label>
                        <input type="number" class="form-control" id="credit_score" placeholder="Credit score" required />
                    </div>

                    <div class="form-group">
                        <label for="amount">Loan Amount</label>
                        <input type="text" class="form-control" id="amount" placeholder="Loan Amount" required />
                    </div>

                    <button type="submit" class="btn btn-default">Get my rates!</button>
                    </form>
                </div>
                </div>            
            </div>
        );
    }
}

export default NewSubmission;