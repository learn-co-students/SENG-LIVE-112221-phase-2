import { useState } from 'react';

function Button({ handleRemoveCard, handleEditCard, card, name, toggleVisibility }) {

    // Create one state that will keep track of whether
    // a Button has been toggled, "isToggled"
    const [ isToggled, setToggled ] = useState(false);

    // 💡 Wrapping other behaviors into one onClick event
    // function someCombinedBehaviors() {
    //     handleEditCard(card);
    //     // ...
    //     // ...
    //     // ...
    // }

    function toggleButton() {

        // Toggle value of "isToggled" state
        setToggled(!isToggled);

        // If "toggleVisibility" is passed as a prop,
        // invoke the function to toggle the "isVisible"
        // state in Card.js 
        if (toggleVisibility) { toggleVisibility() };
    }

    if (name === "cart") {
        return (
            <button className="button" onClick={toggleButton}>
                { isToggled ? "Remove From Cart" : "Add to Cart" }
            </button>
        );
    } else if (name === "like") {
        return (
            // 🚧 Set handleEditCard() as onClick event action
            // ❗ Remember to pass a function reference, not invocation
            <button className="button" onClick={() => handleEditCard(card)}>
                { card.liked ? '❤️' : '♡' }
            </button>
        );
    } else {
        return (
            // 🚧 Set handleRemoveCard() as onClick event action
            // ❗ Remember to pass a function reference, not invocation
            <button className="button" onClick={() => handleRemoveCard(card)} >
                🗑️
            </button>
        );
    }
}

export default Button;