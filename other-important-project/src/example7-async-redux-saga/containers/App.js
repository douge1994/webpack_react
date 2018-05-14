import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

import Counter from '../components/Counter'
import { increaseAction,deleteAction,increaseActionSagas } from '../actions/action'
import { connect } from 'react-redux'


// Map Redux state to component props
function mapStateToProps(state) {
    console.log(state);
    return {
        value: state.count
    }
}

// Map Redux actions to component props
/**/
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () =>{
            //dispatch(increaseAction());
            $.get('./cardlist.json',function(res){
                console.log(res);
                dispatch(increaseAction());
            })
        },
        onDeleteClick:()=>dispatch(deleteAction),
        onIncreaseSagaClick: () => dispatch(increaseActionSagas())
    }
}
 
// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default  App