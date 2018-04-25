import React,{Component} from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery';
import ContactApp from  './ContactApp'
import update from 'react-addons-update'//用来深复制state并且修改

/*
* updata 共有
* $push:向一个数组的尾部添加一个或者多个元素
* let initalArry=[1,2,3] let new Array=update(initalArray,{$push:[4]}) ====>[1,2,3,4]
* $unshift：在一个数组的头部添加一个或多个元素
* let initalArry=[1,2,3] let new Array=update(initalArray,{unshift:[0]}) ====>[0,1,2,3]
* $splice:从数组中移除元素且或想数组中添加元素，来修改一个数组的内容
* let initalArry=[1,2,'a'] let new Array=update(initalArray,{$splice:[[2,1,3,4]]}) ====>[1,2,3,4]
* $set：完整的替换掉整个目标
* $merge：将给定对象的键合并到目标对象中
* let ob={a:5,b:3}; let newObj=update(obj,{$merge:{b:6,c:7}})====>{a:5,b:6,c:7}
* $apply：将当前的值传给一个函数，在函数中对传入的值进行修改，然后使用函数的返回值作为结果
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
        var that = this;//必须的哦
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