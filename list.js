// X The List component accepts 2 props: header and cards. 

// X header is a string of the header of the card to render.

// X cards is an array of card objects. Each object should have a title and content.

// X These props will be passed in for each List from the App component.

// X The List should render a Card component for each of the cards in the cards array prop.

// X Each instance of the Card component should be passed 2 props (and a key). The 2 props are title and content.

// X The title prop is a string for the Card's title.

// X The content prop is a string of the Card's content.

import React from 'react';
import './list.css';
import Card from './card';



function List(props) {
    // return null;
    console.log(props.cards);
    return <section className="List">
               <header className= "listHeader"> 
                    <h2>{props.header}</h2>
               </header>

               <div className ="cardComponents">
                    {props.cards.map((card) =>
                    <Card
                        title = {card.title}
                        content = {card.content}
                        key = {card.id}
                    />
                    )}
               </div>
            </section>;
}


export default List;