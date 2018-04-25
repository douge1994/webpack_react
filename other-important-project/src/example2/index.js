import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


/*
import ContactApp from './example2/ContactApp'
 let contacts =[
 { name:'cassio zen',email:'cassionzem12@mail.com'},
 { name:'cassio zen1',email:'cassionzem13@mail.com'},
 { name:'cassio zen2',email:'cassionzem14@mail.com'},
 { name:'cassio zen3',email:'cassionzem15@mail.com'},
 { name:'cassio zen4',email:'cassionzem16@mail.com'},
 { name:'cassio zen5',email:'cassionzem17@mail.com'},
 { name:'cassio zen6',email:'cassionzem18@mail.com'}
 ];
 ReactDOM.render(<ContactsAppContainer contacts={contacts} />,document.getElementById('root'));
*/
import ContactsAppContainer from './example2/ContactsAppContainer'



ReactDOM.render(<ContactsAppContainer />,document.getElementById('root'));