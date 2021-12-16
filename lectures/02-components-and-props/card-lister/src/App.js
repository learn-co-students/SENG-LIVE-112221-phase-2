import './App.css';

// Card Data Import
import cards from "./cards";

// Child Component Imports
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CardList from "./components/CardList";

function App() {
  // const jsxArray = cards.map(card => <Card text={card.title} content={card.content}/>)


  return (
    <div className="App">
      
      {/* Replace h1 with Component JSX */}
      <h1>NavBar Component</h1>
      <NavBar isloggedIn/>
      
      {/* Replace h1 with Component JSX */}
      <h1>Header Component</h1>
      <Header firstName="Caleb" lastName="Rodriguez"/>
      
      {/* Replace h1 with Component JSX */}
      <h1>CardList Component</h1>
      <CardList cards={cards}/>

      {/* Replace h2s with Component JSX */}

    </div>
  );
}

export default App;