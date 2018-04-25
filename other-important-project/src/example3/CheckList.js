
/*
 *
 * 执行顺序 KanbanBoardContainer -> KanbanBoard ->list -> card -> CheckList
 *
 * */
import React,{ Component } from 'react';
import PropTypes from 'prop-types'

class CheckList extends Component {
    constructor(){
        super(...arguments)
    }
    checkInputKeypress(evt){
        if(evt.key === 'Enter'){
            this.props.taskCallbacks.add(this.props.cardId,evt.target.value);
            evt.target.value='';
        }
    }
    render(){
        let tasks = this.props.tasks.map((task,taskIndex)=>(
                <li className="checklist_task" key={task.id}>
                    <input type="checkbox" checked={task.done}
                        onChange={this.props.taskCallbacks.toggle.bind(null,this.props.cardId,task.id,taskIndex)}/>
                    {task.name}
                    <a href="#" className="checkList_task-remove"
                        onClick={this.props.taskCallbacks.delete.bind(null,this.props.cardId,task.id,taskIndex)}>删除</a>
                </li>)
        );
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text"
                    className="checklist-add-task"
                    placeholder="type then hid enter to add a task"
                    onKeyPress={this.checkInputKeypress.bind(this)}/>
            </div>
        )
    }
}

CheckList.propsType={
    cardId:PropTypes.number,
    tasks:PropTypes.object,
    taskCallbacks:PropTypes.object
}
export default  CheckList;