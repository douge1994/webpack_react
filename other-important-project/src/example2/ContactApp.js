import React,{Component} from 'react'
import PropTypes from 'prop-types'

import SearchBar from './SearchBar'
import ContactList from './ContactList'
class ContactApp extends Component {
    constructor(){
        super(...arguments)
        this.state={
            filterText:''
        }
    }
    handleuserInput(searchItem){
        this.setState({
            filterText:searchItem
        })
    }
    render(){
        return(
            <div>
                <SearchBar filterText={this.state.filterText}
                          onUserInput={this.handleuserInput.bind(this)}/>
                <ContactList contacts={this.props.contacts}
                            filterText={this.state.filterText}/>
            </div>
        )
    }
}
ContactApp.propTypes={
    contacts:PropTypes.arrayOf(PropTypes.object)
};
export default  ContactApp