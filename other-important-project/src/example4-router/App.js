import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    NavLink
    } from 'react-router-dom'

import Home  from './Home'
import About from './About'
import Repos from './Repos'

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/about">关于</Link></li>
                <li><Link to="/topics">主题列表</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" render={()=>{
                return <Redirect to='/topics'/>
            }}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </Router>
)



const Topics = ({ match }) => (
    <div>
        <h2>主题列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    使用 React 渲染
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    组件
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    属性 v. 状态
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
                <h3>请选择一个主题。</h3>
        )}/>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)/**/
/*
const App=() =>(
    <Router>
        <div>
            <h2>xxxxx</h2>
            <ul>
                <li><Link to="/react-router">React Router</Link></li>
                <li><Link to="/react-router1">1</Link></li>
                <li><Link to="/react-router2">2</Link></li>
                <li><Link to="/react-router3">3</Link></li>
                <li><Link to="/react-router4">4</Link></li>
            </ul>

            <Route path="/:id" component={Child}/>
            <Route path="/react-router4" component={Form}/>
        </div>
    </Router>
)
const Child=({ match })=>(
          <div>
              <h3>Id是:{match.params.id}</h3>
          </div>
)
class Form extends Component {
    constructor (){
        super()
        this.state={
            isBlocking:true
        }
    }
    render(){
        return(
            <form onSubmit={event=>{
                event.preventDefault()
                event.target.reset()
                this.setState({
                    isBlocking:false
                })
            }}>
                <input type="text"/><input type="submit" value='提交'/>
                <p>Blocking?{this.state.isBlocking? 'yes':'nope'}</p>
            </form>
        )
    }
}
*/
//switch 渲染route第一个子节点。不使用switch就是用exact精确匹配第一个渲染节点
//NavLink 带样式（也得自定义）的导航标签； exact 不能和activeSttyle一起使用（第二个navlink失去效果）; activeStyle优先级高于activeClassName


/*class App extends Component{
    constructor(){
        super(...arguments);
        this.state={
            loginStatus:true
        }
    }
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><NavLink to="/"  activeClassName='selected'>Home</NavLink></li>
                        <li><NavLink  to="/old-match" activeClassName='selected' activeStyle={{fontWeight:'bold',color:'black'}} >Old Match, to be redirected</NavLink></li>
                        <li><Link to="/will-match">Will Match</Link></li>
                        <li><Link to="/will-not-match">Will Not Match</Link></li>
                        <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/" exact component={()=>{
                            this.state.loginStatus? (<Redirect to='/will-match'/>):
                            (<Home loginStatus={this.state.loginStatus} onClick={this.handleClick.bind(this)}/>)
                        }}/>
                        <Redirect  from="/old-match" to="/will-match"/>
                        <Route exact path="/will-match" component={WillMatch}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

class Home extends Component {
    constructor(){
        super(...arguments);
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <p>
                A <code>&lt;Switch></code> renders the
                first child <code>&lt;Route></code> that
                matches. A <code>&lt;Route></code> with
                no <code>path</code> always matches.
                <button onClick={()=>{this.props.history.push('./will-match')}}>click me</button>
            </p>
        )
    }
}
// const WillMatch = () => <h3>Matched!</h3>
const WillMatch = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
  
  const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );

const NoMatch = ({ location }) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)*/

export default App