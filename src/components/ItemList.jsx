import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import { Link } from 'react-router-dom';

function ItemList(props){
  let visibleContent = null;
  if(props.cardList){
    visibleContent = <div>
      {Object.keys(props.cardList.cards).map(function(cardId) {
        let card = props.cardList.cards[cardId];
        return <Item
          name={card.name}
          image={card.imageUrlHiRes}
          rarity={card.rarity}
          series={card.series}
          set={card.set}
          key={cardId}/>;
      })}
    </div>
  } else {
    visibleContent = <div>
      <h3>There doesn't seem to be anything here!</h3>
      <Link to="/">Back to Home</Link>
    </div>
  }
  return (
    <div>
      {visibleContent}
    </div>
  );
}
ItemList.propTypes = {
  cardList: PropTypes.object
}
export default ItemList;
