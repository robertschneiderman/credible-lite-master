import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as offersActions from '../../offers/actions';
import * as selectedOffersActions from '../../selected_offers/actions';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOffers: []
        };

        this.selectRow = this.selectRow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.getSubmissionsThenOffers();
    }

    selectRow(e, offer) {
        let selectedOffers = this.state.selectedOffers;
        let row = e.target.parentElement;
        if (row.className === 'offer') {
            selectedOffers = selectedOffers.concat([offer]);
            row.className = 'offer selected';
        } else {
            selectedOffers = selectedOffers.filter(selectedOffer => selectedOffer.id !== offer.id);
            row.className = 'offer';            
        }
        this.setState({selectedOffers});
    }

    handleSubmit() {
        this.props.selectOffers(this.state.selectedOffers);
    }

    renderOffers() {
        return this.props.offers.map(offer => {
            return (
                <tr onClick={(e) => this.selectRow(e, offer)} className="offer" key={offer.id}>
                    <td>{offer.name}</td>
                    <td>{offer.term}</td>
                    <td>{offer.apr}</td>
                    <td>{offer.monthly_payment}</td>
                    <td>{offer.total_cost}</td>
                    <td>{offer.total_interest}</td>
                </tr>
            );
        });
    }
    render() {
        return(
            <div className="results-page">
                <table className="results">
                    <tr>
                        <th>Lender's Name</th>              
                        <th>Product Term</th>              
                        <th>APR</th>              
                        <th>Monthly Payment</th>              
                        <th>Total Cost</th>              
                        <th>Total Interest</th>
                    </tr>
                    {this.renderOffers()}
                </table>
                <button onClick={this.handleSubmit}className="btn-results">Compare Offers</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { offers } = state;
    return {    
        offers
    };
};

const mapDispatchToProps = dispatch => ({
    getSubmissionsThenOffers: payload => dispatch(offersActions.getSubmissionsThenOffers(payload)),
    selectOffers: payload => dispatch(selectedOffersActions.selectOffers(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);