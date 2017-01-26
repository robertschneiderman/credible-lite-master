import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { router, hashHistory } from 'react-router';

import {Bar} from 'react-chartjs';

const titleCase = (str) => {
   var splitStr = str.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
};

class SelectedOffers extends Component {
    constructor(props) {
        super(props);
        this.backToOffers = this.backToOffers.bind(this);
    }

    componentDidMount() {
        let selectedOffers = this.props.selectedOffers.length > 0 ? this.props.selectedOffers : JSON.parse(localStorage.getItem('selectedOffers'));
        localStorage.setItem('selectedOffers', JSON.stringify(selectedOffers));
    }

    renderSelectedOffers(key) {
        let selectedOffers = (this.props.selectedOffers.length === 0) ? JSON.parse(localStorage.getItem('selectedOffers')) : this.props.selectedOffers;
        let data = {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                fillColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
                ],         
            }]
        };
        selectedOffers.forEach((offer, i) => {
                data.datasets[0].data.push(offer[key]);
                data.labels.push(`${offer.Name} - Term: ${offer.Term}`);
        });

        let options = {
            scales: {
                xAxes: [{ barThickness: 20 }]
            }               
        };

        return (
            <div className="graph">
                <h2>{titleCase(key.split("_").join(" "))}</h2>
                <Bar data={data} options={options} width="600" height="250" className="selected-offer" />
            </div>
        );
    }

    backToOffers() {
        hashHistory.push('/offers');
    }

    render() {
        return(
            <div className="selected-offers">
                <p className="back-button" onClick={this.backToOffers}>&lt;-- Compare other offers</p>
                <div className="fb space-between">
                    {this.renderSelectedOffers("Monthly Payment")}
                    {this.renderSelectedOffers("Apr")}
                </div>
                <div className="fb space-between">
                    {this.renderSelectedOffers("Total Cost")}
                    {this.renderSelectedOffers("Total Interest")}
                </div>
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