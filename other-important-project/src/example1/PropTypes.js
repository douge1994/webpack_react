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
/*У������
* ���·�Ϊarray/bool/func/number/object/string����
* */
Greeter.propTypes={
    soluation:PropTypes.string.isRequired
};
/*���Ե�Ĭ��ֵ*/
Greeter.defaultProps={
    soluation0:'hello bro'
};
export default  Greeter;