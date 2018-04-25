/*路由配置组件*/
import React,{Component} from 'react'
import { HashRouter as Router,Route } from  'react-router-dom'
import { Provider } from 'react-redux'

import Hello from '../component/hello'

class Main extends Component {
    render(){
        const { store } =this.props;
        return(
            <Router hashType='noslash'>
                <Provider store={store}>
                <Route render={({location})=>{
                    return (
                        <div key={location.pathname} name={location.pathname }>
                            <Route location={location} path='./hello' component={Hello}></Route>
                        </div>
                    )
                }}></Route>
                </Provider>
            </Router>
        )
    }
}
export default  Main;