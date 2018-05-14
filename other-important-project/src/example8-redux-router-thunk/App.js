import React ,{Component}from "react";
import {
    Router,
    Route,
    Redirect,
    withRouter,
    Switch
    } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import $ from 'jquery';
import Login from './components/Login';
import Home from './components/Home';




const history = createBrowserHistory();

class App extends Component {
    constructor (props){
        super(props)
        this.state={
            isAuthorized:false
        }
    }
   
    handleSubmit(location,formValue){
        const that=this;
        console.log(formValue);//表单数据
        console.log(location);//router 的location 属性
        $.get('./project8.json',function(res){
            console.log(res)
            that.setState({
                isAuthorized:true
            })
        })
    }
    
    render() {
        return (
            <Router history={history}>
                <div>
                   <Switch>
                       
                        <Route exact path="/" render={(location)=>{
                                return this.state.isAuthorized?    <Redirect to="/home" />:
                                    <Login onSubmit={this.handleSubmit.bind(this,location)}/>
                        }} />
                        <Route  path='/home'  component={Home}/>
                        {/* <Route  path='/test'  component={Test}/> */}
                    
                   </Switch>
                </div>
            </Router> 
        );
    }
}
export default App;


