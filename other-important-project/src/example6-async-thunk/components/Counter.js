
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// React component
class Counter extends Component {
    render() {
        const { value, onIncreaseClick,onDeleteClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onDeleteClick}>Increase</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
};
export default  Counter