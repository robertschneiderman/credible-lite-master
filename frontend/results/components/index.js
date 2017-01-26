import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, Tr, Td} from 'reactable';
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

    renderColumns(datum) {
        let columns = [];
        for (let key in datum) {
            columns.push(<Td column={key}>datum[key]</Td>);
        }
        return columns;
    }

    renderRows(data) {
        if (data) {
            return data.map(datum => {
                return (
                    <Tr data={datum} className="offer" onClick={(e) => this.selectRow(e, datum)} />
                );
            });
        }
    }
    
    render() {
        let data = this.beautifyData(this.props.offers);
        
        return(
            <div className="results-page">
            <h3 className="offers-subheading">click row to select offer</h3>
            <Table className="results" sortable={true} filterable={['Name']} filterPlaceholder="Filter by lender">
                {this.renderRows(data)}
            </Table>            
            <div className="btn-container">
                <button onClick={this.handleSubmit}className="btn-default btn-results">Compare Offers</button>
            </div>
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