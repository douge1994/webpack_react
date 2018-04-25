import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider, connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './example8-project/reducers/reducer-1'
import App from './example8-project/App'

require('./example8-project/common/initalcss')

/*
<link rel="stylesheet" href="../src/lib/assets/bootstrap.min.css"/>
<link href="../src/lib/assets/css/core.css" rel="stylesheet" type="text/css">
<link href="../src/lib/assets/css/icons.css" rel="stylesheet" type="text/css">
<link href="../src/lib/assets/css/components.css" rel="stylesheet" type="text/css">
<link href="../src/lib/assets/css/pages.css" rel="stylesheet" type="text/css">
*/
/*require('./lib/assets/css/bootstrap.min.css')
require('./lib//assets/css/core.css')
require('./lib/assets/css/icons.css')
require('./lib/assets/css/components.css')
require('./lib/assets/css/pages.css')*/

// Store
const loggerMiddleware = createLogger();
const store = createStore(reducers,
    applyMiddleware(
        thunkMiddleware, // ???????? dispatch() ????
        loggerMiddleware) // ???????? middleware????????? action ???
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);