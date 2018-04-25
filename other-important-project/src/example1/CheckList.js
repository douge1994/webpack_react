import React,{ Component } from 'react';
import PropTypes from 'prop-types'

class CheckList extends Component {
    render(){
        let tasks = this.props.tasks.map((task,i)=>(
                <li className="checklist_task" key={i}>
                    <input type="checkbox" defaultChecked={task.done}/>
                    {task.name}
                    <a href="#" className="checkList_task--remove"></a>
                </li>)
        );
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text"
                    className="checklist-add-task"
                    placeholder="type then hid enter to add a task"/>
            </div>
        )
    }
}

CheckList.propsType={
    cardId:PropTypes.number,
    tasks:PropTypes.object
}
export default  CheckList;