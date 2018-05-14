import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

import Counter from '../components/Counter'
import { increaseAction,deleteAction } from '../actions/action'
import { connect } from 'react-redux'

// React component
/*class Counter extends Component {
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
};*/

// Map Redux state to component props
function mapStateToProps(state) {
    console.log(state);
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () =>{
            //dispatch(increaseAction());
            $.get('./cardlist.json',function(res){
                console.log(res);
                dispatch(increaseAction());
            })
        },
        onDeleteClick:()=>dispatch(deleteAction)
    }
}
// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default  App