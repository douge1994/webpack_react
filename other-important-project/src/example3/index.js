/*
 *
 * Ö´ÐÐË³Ðò KanbanBoardContainer -> KanbanBoard ->list -> card -> CheckList
 *
 * */
import React from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import KanbanBoardContainer from './example3/KanbanBoardContainer'

ReactDOM.render(<KanbanBoardContainer/>, document.getElementById('root'));
registerServiceWorker();
