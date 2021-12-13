/* 
    - Break Out Activity #1: Take HTML from Toy Tales lab (Lines 9 - 48) and turn it into JSX
        - https://github.com/learn-co-curriculum/phase-1-challenge-toy-tale/blob/master/index.html
        - What needs to change? What's the same?
        - Refactor HTML into separate components

    - Break Out Activity #2: Implement a ToyCard Component
        - Start by hard-coding the JSX in your App component return statement
        - Use props to make your component reusable
        - Copy/paste data from the "toys.js" file as props and iterate over Toy objects
          to create a ToyCard component for each
        - BONUS: Try importing and storing data from the "toys.js" file
*/

// Break Out Activity #2: Import Toys Array from toys.js
import MyToys from './toys';

// Break Out Activity #2: Import Custom Components
import ToyCard from './components/ToyCard';

// Root App Component Function
function App() {
    return (
        // Must return JSX as one Parent Level Element
        <div>
            {/* Break Out Activity #1: Refactor HTML into JSX */}
            
            {/* Header Component */}
            <div id="toy-header">
                <img
                    src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
                    alt="toy-header"
                />
            </div>

            {/* Container Component */}
            <div className="container">
                
                {/* Form Component */}
                <form className="add-toy-form">
                    <h3>Create a toy!</h3>

                    {/* Input Component */}
                    <input
                        type="text"
                        name="name"
                        // value=""
                        placeholder="Enter a toy's name..."
                        className="input-text"
                    />
                    <br />

                    {/* Input Component */}
                    <input
                        type="text"
                        name="image"
                        // value=""
                        placeholder="Enter a toy's image URL..."
                        className="input-text"
                    />
                    <br />

                    {/* Input Component */}
                    <input
                        type="submit"
                        name="submit"
                        value="Create Toy"
                        className="submit"
                    />
                </form>
            </div>
            
            {/* Hero Component */}
            
            <p style={{textAlign: 'center'}}>
                Andy needs your help! <button id="new-toy-btn">Add a new toy!</button>
            </p>

            {/* ToyCollection Component */}
            <div id="toy-collection">
        
                {/* Map over Array of Toy Objects */}
                {MyToys.map(toy => {
                
                    // For each Toy object, create a ToyCard Component and pass
                    // the Toy object as a prop, "toy"
                    return (
                        <ToyCard key={toy.id} toy={toy}/>
                    );
                })}
            </div>
        </div>
  );
}

export default App;