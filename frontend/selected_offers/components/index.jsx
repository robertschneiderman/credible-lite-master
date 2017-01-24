import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

// import {BarChart} from 'react-chartjs';

class SelectedOffers extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let selectedOffers = this.props.selectedOffers ? this.props.selectedOffers : JSON.parse(localStorage.getItem('selectedOffers'));
        localStorage.setItem('selectedOffers', JSON.stringify(selectedOffers));
    }

    renderSelectedOffers() {
        let selectedOffers = (this.props.selectedOffers.length === 0) ? JSON.parse(localStorage.getItem('selectedOffers')) : this.props.selectedOffers;
        return selectedOffers.map(offer => {
            return <li className="selected-offer" >{offer.monthly_payment}</li>;
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