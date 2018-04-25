import React,{Component} from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery';
import ContactApp from  './ContactApp'
import update from 'react-addons-update'//�������state�����޸�

/*
* updata ����
* $push:��һ�������β�����һ�����߶��Ԫ��
* let initalArry=[1,2,3] let new Array=update(initalArray,{$push:[4]}) ====>[1,2,3,4]
* $unshift����һ�������ͷ�����һ������Ԫ��
* let initalArry=[1,2,3] let new Array=update(initalArray,{unshift:[0]}) ====>[0,1,2,3]
* $splice:���������Ƴ�Ԫ���һ������������Ԫ�أ����޸�һ�����������
* let initalArry=[1,2,'a'] let new Array=update(initalArray,{$splice:[[2,1,3,4]]}) ====>[1,2,3,4]
* $set���������滻������Ŀ��
* $merge������������ļ��ϲ���Ŀ�������
* let ob={a:5,b:3}; let newObj=update(obj,{$merge:{b:6,c:7}})====>{a:5,b:6,c:7}
* $apply������ǰ��ֵ����һ���������ں����жԴ����ֵ�����޸ģ�Ȼ��ʹ�ú����ķ���ֵ��Ϊ���
* let ob={a:5,b:3}; let newObj=update(obj,{b:{$apply:(value)=>value*2}})====>{a:5,b:6}
* */
class ContactsAppContainer extends Component {
    constructor(){
        super(...arguments);
        this.state= {
            contacts: []
        }
    }

    componentDidMount(){
        var that = this;//�����Ŷ
        $.get('./contacts.json',function(res){
            console.log(res.join());
            that.setState({contacts:res})
        });
    }

    render(){
        return (
            <ContactApp contacts={this.state.contacts}/>
        )
    }

}
export default ContactsAppContainer