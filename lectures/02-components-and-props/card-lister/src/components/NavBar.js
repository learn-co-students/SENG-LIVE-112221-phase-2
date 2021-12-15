function NavBar({ isLoggedIn }) {
    return (
        <nav className="nav">
            <h2 className="component-name">NavBar Component</h2>
            
            <p>You're Logged {isLoggedIn ? "In" : "Out"}</p>
        </nav>
    );

    // if (isLoggedIn) {
    //     return (
    //         <nav className="nav">
    //             <h2 className="component-name">NavBar Component</h2>
                
    //             <p>You're Logged In</p>
    //         </nav>
    //     );
    // } else {
    //     return (
    //         <nav className="nav">
    //             <h2 className="component-name">NavBar Component</h2>
                
    //             <p>You're Logged Out</p>
    //         </nav>
    //     );
    // }
}

export default NavBar;