import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../offers/actions';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let submissions = localStorage.getItem('submissions');
        submissions = submissions ? JSON.parse(submissions) : [];
        submissions.forEach(submission => {
            this.props.getOffers(submission);
        });
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
    getOffers: payload => dispatch(actions.getOffers(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);