import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table} from 'reactable';
import * as offersActions from '../../offers/actions';
import * as selectedOffersActions from '../../selected_offers/actions';

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

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOffers: []
        };

        this.selectRow = this.selectRow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.beautifyData = this.beautifyData.bind(this);
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

    beautifyData(data) {
                // debugger;
        if (data.length > 0) {
            let rows = [];
            let keyOrder = ['name', 'term', 'monthly_payment', 'total_interest', 'total_cost', 'apr'];

            data.forEach((row, i) => {
                rows.push({});
                keyOrder.forEach(key => {
                    rows[i][titleCase(key.split('_').join(" "))] = row[key];
                });
            });

            return rows;
        }
    }
    
    render() {
                // <table className="results">
                //     <tr>
                //         <th>Lender's Name</th>              
                //         <th>Product Term</th>              
                //         <th>APR</th>              
                //         <th>Monthly Payment</th>              
                //         <th>Total Cost</th>              
                //         <th>Total Interest</th>
                //     </tr>
                //     {this.renderOffers()}
                // </table>

        let data = this.beautifyData(this.props.offers);

        return(
            <div className="results-page">
            <Table className="results" data={data} sortable={true} filterable={['Name']} filterPlaceholder="Filter by lender" />            
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