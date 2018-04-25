import React,{Component} from 'react'
import PropTypes from 'prop-types'

import ContactItem from './ContactItem'
class ContactList extends Component {
    constructor(){
        super(...arguments)
    }
    componentWillReceiveProps(){
        console.log(this.props)//组件接收到新的props时被调用，使用this.setState不会触发一次额外的渲染（props的上一次结果）
    }
    shouldComponentUpdate(){
        console.log(this.props)//不允许通过this.state修改state 返回true|| false用于即将到来的渲染（props的上一次结果）
        return true
    }
    componentDidUpdate(){
        console.log(this.props)//组件得更新被刷到dom之后，就被立即调用（props的最终结果）
    }
    //若需要在state更改时执行操作，使用componentWillUpdate函数
    render(){
        let filteredContacts = this.props.contacts.filter(
            (contact)=>contact.name.indexOf(this.props.filterText) !==-1
        );
        return (
          <ul>
              {filteredContacts.map(
                  (contact)=><ContactItem key={contact.email}
                                        name={contact.name}
                                        email={contact.email}/>
              )}
          </ul>
        )
    }
}
ContactList.propTypes={
    contacts:PropTypes.arrayOf(PropTypes.object),
    filterText:PropTypes.string.isRequired
}
export default  ContactList