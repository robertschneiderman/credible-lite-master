import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../offers/actions';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getSubmissionsThenOffers();
    }
    
    render() {
        return(
            <div className="results">

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
    getSubmissionsThenOffers: payload => dispatch(actions.getSubmissionsThenOffers(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);