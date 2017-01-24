import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../offers/actions';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOffers: []
        };
        this.selectRow = this.selectRow.bind(this);
    }

    componentWillMount() {
        this.props.getSubmissionsThenOffers();
    }

    selectRow(e, offer) {
        let selectedOffers = this.state.selectedOffers;
        let row = e.target.parentElement;
        if (row.className === 'offer') {
            selectedOffers.concat([offer]);
            row.className = 'offer selected';
        } else {
            selectedOffers.filter(selectedOffer => selectedOffer.id !== offer.id);
            row.className = 'offer';            
        }
        this.setState({selectedOffers});
    }

    renderOffers() {
        return this.props.offers.map(offer => {
            return (
                <tr onClick={(e) => this.selectRow(e, offer)} className="offer" key={offer.id}>
                    <td>{offer.apr}</td>
                    <td>{offer.monthly_payment}</td>
                    <td>{offer.term}</td>
                    <td>{offer.total_cost}</td>
                    <td>{offer.total_interest}</td>
                </tr>
            );
        });
    }
    render() {
        return(
            <table className="results">
                <tr>
                    <th>APR</th>              
                    <th>Monthly Payment</th>              
                    <th>Term</th>              
                    <th>Total Cost</th>              
                    <th>Total Interest</th>
                </tr>
                {this.renderOffers()}
            </table>
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
    getSubmissionsThenOffers: payload => dispatch(actions.getSubmissionsThenOffers(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);