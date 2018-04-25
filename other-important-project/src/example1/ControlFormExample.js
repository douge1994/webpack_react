import React,{ Component } from 'react'

/*
 * 受控组件为输入域提供值
 * */
class Search0 extends Component {
    constructor(){
        super(...arguments)
        this.state={
            searchItem:'react',
            option:'2',
            textArea:'this is textarea 可控组件'
        }
    }
    handleChange(event){
        this.setState({searchItem:event.target.value})
    }
    handleSelectChange(event){
        this.setState({option:event.target.value})
    }
    /*
    * textarea 靠value改变 且textarea的写法为单个标签闭合
    * select 靠option的value改变
    * */
    render(){
        return(
            <div>
                Search item:
                <input type="search" value={this.state.searchItem}
                    onChange={this.handleChange.bind(this)}/>
                <textarea name="xxx" id="" cols="30" rows="10" value={this.state.textArea}/>
                <select name="" id="" value={this.state.option}
                    onChange={this.handleSelectChange.bind(this)}>
                    <option value="1">one</option>
                    <option value="2">two</option>
                    <option value="3">three</option>
                </select>
            </div>
        )
    }
}

/*
* 非受控组件是一种反模式。（不需要逐个监管用户输入域，不为任何输入域提供值）
* */
class Search extends Component{
    constructor(){
        super(...arguments)
    }
    handleSubmit(event){
        console.log("submit value:",
            event.target.name.value,
            event.target.email.value
            );
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                {/* name 是必须要的*/}
                <div className="formGroup">Name:<input name='name' type="text"/></div>
                <div className="formGroup">email:<input name='email' defaultValue="991984903@qq.com" type="email "/></div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
/*
* refs
* */
class FocusText extends Component {
    constructor(){
        super(...arguments)
    }
    handleClick(){
        this.refs.myTextInput.focus();
    }
    render(){
        return(
            <div>
                <input type="text" ref='myTextInput'/>
                <input type="button"
                      value="focus the text Input"
                      onClick={this.handleClick.bind(this)}/>
            </div>
        )
    }
}

export default FocusText;