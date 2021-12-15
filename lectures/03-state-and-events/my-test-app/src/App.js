// Style Imports
import './App.css';

// Component Imports
import Header from './components/Header';
import NavBar from './components/NavBar';
import CardList from './components/CardList';

// Data
import cardData from './cards';

function App() {

  // Q: Why do we want to manage 'cards' state here?
  
  // A: Changes that we make to the 'cards' state will
  //    persist to other components further down the
  //    component hierarchy. We have 'lifted' the cards
  //    state to a suitable / scalable position in the
  //    component hierarchy.

  return (
    <div className="App">
      {/* NavBar Component */}
      <NavBar isLoggedIn/>

      {/* Header Component */}
      <Header 
        firstName="Louis" 
        lastName="Medina" 
      />

      {/* CardList Component */}
      <CardList 
        cards={cardData} 
      />
    </div>
  );
}

export default App;
