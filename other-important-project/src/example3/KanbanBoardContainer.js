/*
*
* 执行顺序 KanbanBoardContainer -> KanbanBoard ->list -> card -> CheckList
*
* */
import React,{ Component } from 'react';
import List from './List';
import PropTypes from 'prop-types';
import $ from 'jquery'
import KanbanBoard from './KanbanBoard'
import update from 'react-addons-update'
class KanbanBoardContainer extends Component {
    constructor(){
        super(...arguments);
        this.state={
            cards:[]
        }
    }
    componentDidMount(){
        var that=this
        $.get('./cardlist.json',function(res){
            that.setState({cards:res})
        })
    }
    addTask(cardId,taskName){
        console.log('添加')
        console.log(cardId,taskName);
        let prevState=this.state;//回滚需要
        let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);
        let newTask = {id:Date.now(),name:taskName,done:false}
        let nextState = update(this.state.cards,{
            [cardIndex]:{
                tasks:{$push:[newTask]}
            }
        })
        this.setState({cards:nextState})
    }
    deleteTask(cardId,taskId,taskIndex) {
        console.log('删除')
        console.log(cardId, taskId, taskIndex);
        let prevState=this.state;
        let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);
        let nextState = update(this.state.cards, {[cardIndex]: {tasks: {$splice: [[taskIndex, 1]]}
                                }});
        this.setState({cards:nextState})
    }

    toggleTask(cardId,taskId,taskIndex){
        console.log('切换')
        console.log(cardId,taskId,taskIndex)
        let prevState=this.state;
        let cardIndex=this.state.cards.findIndex((card)=>card.id == cardId)
        let newDomeValue;
        console.log(cardIndex)
        let nextState=update(this.state.cards,{
            [cardIndex]:{
                tasks:{
                    [taskIndex]:{
                        done:{$apply:(done)=>{
                            newDomeValue=!done;
                            return newDomeValue
                        }}
                    }
                }
            }

        })
        console.log(nextState)
        this.setState({
            cards:nextState
        })
    }

    render(){
        return <KanbanBoard cards ={this.state.cards}
                             taskCallbacks={{
                                toggle:this.toggleTask.bind(this),
                                delete:this.deleteTask.bind(this),
                                add:this.addTask.bind(this)}}/>
    }
}
export default KanbanBoardContainer;