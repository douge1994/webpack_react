/*
 *
 * 执行顺序 KanbanBoardContainer -> KanbanBoard ->list -> card -> CheckList
 *
 * */
import React,{ Component } from 'react';
import CheckList from './CheckList'
import PropTypes from 'prop-types'

class Card extends Component {
    constructor(){
        super(...arguments)
        this.state={
            showDetails:false
        }
    }
    toggleDetails(){
        this.setState({ showDetails:!this.state.showDetails })
    }
    render(){
        let cardDetails;
        if(this.state.showDetails){
            cardDetails=(
                <div className="card_details">
                    {this.props.description}
                    <CheckList cardId={this.props.id }
                             tasks={this.props.tasks}
                             taskCallbacks={this.props.taskCallbacks}/>
                </div>
            )
        }
        let sideColor={
           /* position:'absolute',
            zIndex:-1,
            top:0,
            bottom:0,
            left:0,
            width:7,*/
            backgroundColor:this.props.color
        };
        /*尽量少使用三元运算符&&空格可以使用{" "}*/
        return(
            <div className="card">
                {/*注释需要用{}抱起来*/}
                <div style={sideColor}>
                    <div className={
                        this.state.showDetails?"card_title--is-open":'card_title'
                    } onClick={this.toggleDetails.bind(this)}>{this.props.title}</div>
                </div>
                {cardDetails}
            </div>
        )
    }
}
Card.propTypes={
    id:PropTypes.number,
    title:PropTypes.string,
    description:PropTypes.string,
    color:PropTypes.string,
    tasks:PropTypes.arrayOf(PropTypes.object),
    taskCallbacks:PropTypes.object
};

export default  Card;