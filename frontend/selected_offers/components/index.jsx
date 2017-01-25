import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import {Bar} from 'react-chartjs';

class SelectedOffers extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let selectedOffers = this.props.selectedOffers.length > 0 ? this.props.selectedOffers : JSON.parse(localStorage.getItem('selectedOffers'));
        localStorage.setItem('selectedOffers', JSON.stringify(selectedOffers));
    }

    renderSelectedOffers() {
        let selectedOffers = (this.props.selectedOffers.length === 0) ? JSON.parse(localStorage.getItem('selectedOffers')) : this.props.selectedOffers;
        let data = {
            labels: [],
            datasets: [{
                data: [100, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                fillColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                ]               
            }]
        };
        selectedOffers.forEach((offer, i) => {
            let key = "monthly_payment";
            // Object.keys(offer).forEach(key => {
                // if (!data.datasets.data) data.datasets.data = [];
                // if (!data.labels) data.labels = [];
                // debugger;
                // data.datasets[0].data.push(offer["monthly_payment"]);
                data.labels.push(`offer ${i+1}`);
            // });
        });
        // return selectedOffers.map(offer => {
            return <Bar data={data} width="600" height="250" className="selected-offer" />;
        // });
    }

    render() {
        return(
            <div className="selected-offers">
                {this.renderSelectedOffers()}
            </div>
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