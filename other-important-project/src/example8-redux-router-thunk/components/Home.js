import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
    } from "react-router-dom";
import { connect } from 'react-redux'
import { increaseAction,deleteAction } from '../actions/action'
// import Topic from './Topic'
// import Test from './Test'
// import ReduxExample2 from './ReduxExample2'


import '../common/initalcss'
import '../css/home.css'


/**
 * 按需加载组件使用~~~~~
 * @param --start-- 此处为按需加载各个组件<test中含有一个echart的引入。>
 */ 
import Bundle from './Bundle'
const Topic = (props) => (
  <Bundle load={() => import('./Topic')}>
      {(Topic) => <Topic {...props}/>}
  </Bundle>
);
const Test = (props) => (
  <Bundle load={() => import('./Test')}>
      {(Test) => <Test {...props}/>}
  </Bundle>
);
const ReduxExample2 = (props) => (
  <Bundle load={() => import('./ReduxExample2')}>
      {(ReduxExample2) => <ReduxExample2 {...props}/>}
  </Bundle>
);
/**
 * 
 * @param --end-- 此处为按需加载各个组件<test中含有一个echart的引入。>
 */ 



class Home extends Component {
    constructor(props){
        super(props)
    }
    /**
     * 
     * react-redux使用很重要...
     * 
     */ 
    handleClick(){
      console.log(this.props)
      this.props.handleClick()//此次调用是因为connect后,将更改value的事件放置在了store中
    }
    handleClickExample2(){
      this.props.handleClickExample2()//此次调用是因为connect后,将更改value的事件放置在了store中
    }

    render() {
        const match=this.props.match
        const childRoute=(match) =>{
          return (
            <div>
              <div className="nav-left">
                <h3>路由目录</h3>
                <ul>
                    <li>
                      <Link to={`${match.url}`}>首页</Link>
                    </li>
                    <li>
                      <Link to={`${match.url}/test`}>测试</Link>
                    </li>
                    <li>
                      <Link to={`${match.url}/Topic`}>topic</Link>
                    </li>
                  </ul>
              </div>
              <div className="main-right">
                  <div className="header">
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                    </ul>
                  </div>
                  <div className="content">
                      <div className="col-lg-12">
                              <Route exact path={`${match.url}/test`} component={Test} />
                              <Route exact path={`${match.url}/Topic`} component={Topic} />
                              <Route exact path={match.url} render={() => (
                                  <div>
                                      <h3>react-redux 使用.</h3>

                                      <h4>example--------------1</h4>
                                      <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Increase</button>
                                      <p>{this.props.value}</p>


                                      <h4>example--------------2</h4>
                                      <ReduxExample2 value={this.props.value} onClick={this.handleClickExample2.bind(this)}/> 
                                  </div>
                                  
                              )}/>
                      </div>
                  </div>
              </div>
            </div>
          )
        }
        return childRoute(match)
              
    }
}

//为了给value赋值。。那么告知已经在App注册的store，此处将通过state.count获取store里的信息从而赋值给value
const mapStateToProps=(state)=>{
    console.log(state)
    return {
      value: state.count
  }
}
// 为了更改数据（就是那个value）,需要通过某种操作实现（此处是点击噢,在上面的组件里有“”““调用”“”哦），注意书写模式哈，
//此处通过handleClick和handleClickExample2发送事件（dispatch（xxx）;xxx就是一个对象，这个对象有个type属性,和reducer里面的一一对应----使得value改变的逻辑就在reducer里面）
//handleClick和handleClickExample2返回的是一个函数哦、、函数函数函数~~~~注意书写模式哈
const mapDispatchToProps=(dispatch)=>{
    return {
      handleClick:()=>{
          dispatch(increaseAction())
      },
      handleClickExample2:()=>{
        dispatch(deleteAction)
      }
    }
}
//connect 函数 就是没有传入参数mapStateToProps，mapDispatchToProps。。。它也会将home组件同store联系在一起
//也将享受store的监听从而渲染页面
export default connect(mapStateToProps,mapDispatchToProps)(Home);