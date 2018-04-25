import React,{Component} from 'react'
import PropTypes from 'prop-types'

import ContactItem from './ContactItem'
class ContactList extends Component {
    constructor(){
        super(...arguments)
    }
    componentWillReceiveProps(){
        console.log(this.props)//������յ��µ�propsʱ�����ã�ʹ��this.setState���ᴥ��һ�ζ������Ⱦ��props����һ�ν����
    }
    shouldComponentUpdate(){
        console.log(this.props)//������ͨ��this.state�޸�state ����true|| false���ڼ�����������Ⱦ��props����һ�ν����
        return true
    }
    componentDidUpdate(){
        console.log(this.props)//����ø��±�ˢ��dom֮�󣬾ͱ��������ã�props�����ս����
    }
    //����Ҫ��state����ʱִ�в�����ʹ��componentWillUpdate����
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