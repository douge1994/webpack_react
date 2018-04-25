import React,{ Component} from 'react'
import PropTypes from 'prop-types'


class Greeter extends Component {
    constructor(){
        super(...arguments)
    }
    render(){
        return (
          <div>
              <h1>{ this.props.soluation } </h1>
              <h2>{this.props.soluation0}</h2>
          </div>
        )
    }
}
/*校验属性
* 大致分为array/bool/func/number/object/string几种
* */
Greeter.propTypes={
    soluation:PropTypes.string.isRequired
};
/*属性得默认值*/
Greeter.defaultProps={
    soluation0:'hello bro'
};
export default  Greeter;