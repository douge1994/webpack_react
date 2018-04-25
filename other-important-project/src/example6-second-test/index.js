import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider, connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import counter from './example6-second-test/reducers/reducer1'
import App from './example6-second-test/containers/App'
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
}*/

// Action
/*const increaseAction = { type: 'increase' }*/

// Reducer
/*
function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}
*/

// Store
const loggerMiddleware = createLogger();
const store = createStore(counter,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
        loggerMiddleware) // 一个很便捷的 middleware，用来打印 action 日志
);

// Map Redux state to component props
/*function mapStateToProps(state) {
    return {
        value: state.count
    }
}*/

// Map Redux actions to component props
/*function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}*/

// Connected Component
/*const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);