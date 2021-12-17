// Breakout Activity #1: Add Necessary Callback Functions / JSX Attributes to Control All <input>s
    // Extra Credit: Create a state (formData) to manage all of our form data
    // Extra Credit: Create ONE callback function to manage the onChange behavior 
    // for any of our controlled inputs

// Breakout Activity #2: Dynamically display a list of Added Cards as we continue 
// to submit new Card entries.

// What hook will we need to use to manage states for CardForm?

function CardForm({ handleAddCard, cards }){
    // Create states we will use to handle title and content

    // Create callback functions to manage the onChange behavior for each of our controlled inputs
    
    // function manageTitle(event) {
    //     
    // }

    // function manageContent(event) {
    //     
    // }

    // Extra Credit: Create a state (formData) to manage all of our form data

    // Extra Credit: Create ONE callback function (manageFormData) to manage the onChange 
    // behavior for any of our controlled inputs
    function manageFormData(event) {
        // Capture name and value from target of event

        // Update formData state with new form submission data
    }

    // Breakout Activity #2: Create a callback function to handle onSubmit behavior for our controlled form
    function handleSubmit(event) {
        // console.log("handleSubmit fired");

        // Prevent default form submission behavior

        // Create newCard JS object with formData and generate
        // a unique ID for each new object

        // Use handleAddCard from props to add the newCard JS object
        // to the existing array of Card objects (cards)

        // Clear out input values upon form submission using formDataSetter
    }

    return (
        <div>
            <h1> Add New Card</h1>
            <form onSubmit={null}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    name="title"
                    className="input"
                    onChange={null}
                    value={null}
                />
                <input 
                    type="text" 
                    placeholder="Content" 
                    name="content"
                    className="input"
                    onChange={null}
                    value={null}
                />

                <input 
                    type="submit" 
                    value="Submit"
                    className="input"
                />
            </form>

            {/* Check "title" and "content" states here */}
            <p>{null} {null}</p>
        </div>
    );
}

export default CardForm;
