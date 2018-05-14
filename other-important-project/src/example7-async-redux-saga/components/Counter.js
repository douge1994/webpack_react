
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import img1 from '../images/1.png'
// React component
class Counter extends Component {
    render() {
        const { value, onIncreaseClick,onDeleteClick,onIncreaseSagaClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onIncreaseSagaClick}>IncreaseSaga</button>
                <button onClick={onDeleteClick}>delete</button>
                <img src={img1} alt=""/>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
};
export default  Counter