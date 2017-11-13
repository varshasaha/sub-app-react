import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import './SubApp.css';

class SubApp extends Component {
    constructor() {
        super();
        this.fetchHandkerchief = this.fetchHandkerchief.bind(this);
    }

    fetchHandkerchief() {
        const { dispatch } = this.props;
        dispatch(actions.fetchHandkerchief());
    }

    render() {
        const { medicine, handkerchief } = this.props;
        return (
            <div className="childCont">
                <h2>I am react child content</h2>
                {
                    medicine === 'Sneezol' ? <button onClick={this.fetchHandkerchief}> 
                        Fetch handkerchief </button> : null
                }
                {
                    handkerchief ? <div className="result">Handerchief fetched successfully</div> : null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        medicine: state.medicineStore.medicine,
        handkerchief: state.clientState.subapp.handkerchief
    }
}

export default connect(mapStateToProps)(SubApp);
