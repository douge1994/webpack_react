import React,{ Component } from 'react';
import List from './List';
import PropTypes from 'prop-types'
class KanbanBoard extends Component {


    render(){
        return(
            <div className='app'>
                <List id="todo" title="to do" cards={
                    this.props.cards.filter((card)=>card.status === 'todo')
                }></List>
                <List id="in-progress" title="in progress" cards={
                    this.props.cards.filter((card)=>card.status === 'in-progress')
                }></List>
                <List id="done" title="done" cards={
                    this.props.cards.filter((card)=>card.status === 'done')
                }></List>
            </div>
        )
    }
}
/*
* proptypes ”¶”√
* */
KanbanBoard.propTypes={
    cards:PropTypes.arrayOf(PropTypes.object)
};
export default  KanbanBoard;