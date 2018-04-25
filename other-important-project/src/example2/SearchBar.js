import React,{Component} from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component {
    constructor(){
        super(...arguments)
    }
    handleChange(event){
        this.props.onUserInput(event.target.value)
    }
    render(){
        return <input type="text"
                      placeholder="search"
                      value={this.props.filterText}
                      onChange={this.handleChange.bind(this)}/>
    }
}
SearchBar.propTypes={
    onUserInput:PropTypes.func.isRequired,
    filterText:PropTypes.string.isRequired
}
export default  SearchBar


