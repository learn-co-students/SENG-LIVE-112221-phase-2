import { useState } from 'react';

function CardForm({ handleAddCard, cards }){
    // Create a state (formData) to manage all of our form data
    const [ formData, formDataSetter ] = useState({
        title: "",
        content: ""   
    })

    // Create one callback function to manage the onChange behavior for any of our
    // controlled inputs
    function manageFormData(event) {
        // Capture name and value from target of event
        let targetName = event.target.name;
        let targetValue = event.target.value;

        // Update formData state with new form submission data
        formDataSetter({
            // Object we want to modify
            ...formData,
            
            // Key / value pairing to be updated
            [targetName]: targetValue 
        });
    }

    // Create a callback function to handle onSubmit behavior for our controlled form
    function handleSubmit(event) {
        let newId = cards.length + 1;

        // Prevent default form submission behavior
        event.preventDefault();

        // Create newCard JS object with formData and generate
        // a unique ID for each new object
        const newCard = {
            id: newId,
            title: formData.title,
            content: formData.content
            // ...formData
        }

        // Use handleAddCard from props to add the newCard JS object
        // to the existing array of Card objects (cards)
        handleAddCard(newCard); 

        // Clear out input values upon form submission using formDataSetter
        formDataSetter({
            // key / value pairs to update
            title: "",
            content: ""    
        });
    }

    return (
        <div>
            <h1> Add New Card</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    name="title"
                    className="input"
                    onChange={manageFormData}
                    value={formData.title}
                />
                <input 
                    type="text" 
                    placeholder="Content" 
                    name="content"
                    className="input"
                    onChange={manageFormData}
                    value={formData.content}
                />

                <input 
                    type="submit" 
                    value="Submit"
                    className="input"
                />
            </form>

            <p>{formData.title} {formData.content}</p>
        </div>
    );
}

export default CardForm;