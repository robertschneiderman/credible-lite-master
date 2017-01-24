import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class SelectedOffers extends Component {
    constructor(props) {
        super(props);
    }

    renderSelectedOffers() {
        return this.props.selectedOffers.map(offer => {
            return <li className="selected-offer">{offer.monthly_payment}</li>;
        });
    }

    render() {
        return(
            <table className="selected-offers">
                {this.renderSelectedOffers()}
            </table>
        );
    }
}

const mapStateToProps = state => {
    let {selectedOffers} = state;
    return {
        selectedOffers
    };
};

const mapDispatchToProps = dispatch => ({
    SelectedOffers: payload => dispatch(SelectedOffers(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedOffers);