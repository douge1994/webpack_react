import React from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import KanbanBoard from './example1/KanbanBoard'
import FocusText from './example1/ControlFormExample'
import Greeter from './example1/PropTypes'
let cardList  = [
    {
        id:1,
        title:'read the book',
        description:'i shiuld read the whoite book',
        status:'in-progress',
        color:'red',
        tasks:[]
    },
    {
        id:2,
        title:'write some code',
        description:'cpde a;onmg with the samples in the book',
        status:'todo',
        color:'blue',
        tasks:[
            {
                id:1,
                name:'ContactList Example',
                done:true
            },
            {
                id:2,
                name:'Kanban Example',
                done:false
            },
            {
                id:3,
                name:'My own experiments',
                done:false
            }
        ]
    }
];

(1)
ReactDOM.render(<KanbanBoard cards={cardList} />, document.getElementById('root'));
/*(2)
ReactDOM.render(<FocusText />, document.getElementById('root'));*/

/*(3)
* ReactDOM.render(<Greeter soluation='hello world'/>,document.getElementById('root'));
 * */

registerServiceWorker();
