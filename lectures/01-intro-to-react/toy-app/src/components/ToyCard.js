// props object
// { 
//     key: 1,  
//     toy: {
//         id: 1,
//         name: "Woody",
//         image:
//             "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101036512835",
//         likes: 33
//     }
// }

function ToyCard(props) {
    return (
        // Must return JSX as one Parent Level Element
        <div>
            {/* Render each value that we need via 
            the "toy" Object passed as a prop
            from "App.js" */}
            
            <h1>Toy Name: {props.toy.name}</h1>
            <img src={props.toy.image}/>
            <p>Likes: {props.toy.likes}</p>
        </div>
    );
}

// Export ToyCard Component function to make usable elsewhere in our React app
export default ToyCard;