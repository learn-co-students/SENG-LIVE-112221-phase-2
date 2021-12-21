import { useState } from 'react';
import Button from './Button';

function Card({ handleRemoveCard, handleEditCard, card}) {
    // Create a State to handle Card info visibility
    const [ isVisible, setVisibility ] = useState(true);

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2,
                width: "10rem"
            }}
        />
    );

    // Abstract out Card Details into JS Function returning JSX
    function showCardDetails() {
        return (
            <>
                <h2 className="component-name">Card Component</h2>
                <h1>{card.title}</h1>
                <ColoredLine color="black" />
                <p>{card.content}</p>
            </>
        )
    }

    // Create a Callback Function to contain setVisiblity 
    function toggleVisibility() {
      setVisibility(!isVisible);
    }

    return (
        <div className="card">

            { isVisible ? showCardDetails() : <h2>Added to Cart</h2>  }

            <Button name="cart" toggleVisibility={toggleVisibility} />
            <br />
            <Button 
                name="like" 
                card={card}
                handleEditCard={handleEditCard}
            />
            <Button 
                name="trash" 
                card={card}
                handleRemoveCard={handleRemoveCard}
            />
        </div>
    );
}

export default Card;