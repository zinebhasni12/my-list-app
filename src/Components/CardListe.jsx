import React from 'react';
import Card from './Card';

function CardList({pays} ){
    return(
<div className="grid grid-cols-4 gap-4">
      {pays.map(pay => <Card key={pays.id} pay={pay} />)}
    </div>

 );
}
    export default CardList;