import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './css/index.css'; 
import './css/index.scss';

import service from 'service'
import { Divider } from 'antd';

class Index extends Component {
    constructor(props){
        super(props)
    }
    render() {
        service()
        return (
            <div className='box'>
                  <p className='test123'>sssss</p>
            </div>
        );
    }
}
console.log("process.env.NODE_ENV 的值是(webpack.config.js)："+ process.env.NODE_ENV)

ReactDOM.render(<Index/>,document.getElementById('root'))
