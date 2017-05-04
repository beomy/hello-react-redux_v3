import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../actions';

class Option extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.props.onUpdateDiff(parseInt(event.target.value));
    }

    render() {
        return (
            <div>
                <input value={this.props.diff} onChange={this.onChange} />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        diff: state.counter.diff
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        onUpdateDiff: (value) => dispatch(setDiff(value))
    };
}

Option = connect(mapStateToProps, mapDispatchToProps)(Option);

export default Option;