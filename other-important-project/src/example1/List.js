import React,{ Component } from 'react';
import Card from './Card'
import PropTypes from 'prop-types'
class List extends Component {
    render(){
        var cards = this.props.cards.map((card,i)=>{
            return <Card id={card.id}
                     key={i}
                     color={card.color}
                     title={card.title}
                     description={card.description}
                     tasks={card.tasks} />
        });
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
            );
    }
}
List.propTypes = {
     title:PropTypes.string.isRequired,
     cards:PropTypes.arrayOf(PropTypes.object)
}

export default  List