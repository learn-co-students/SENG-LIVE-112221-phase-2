function NavBar(isLoggedIn) {
    return (
        <nav className="nav">
            <h2 className="component-name">NavBar Component</h2>
            
            <p>You're Logged {isLoggedIn ? "In" : "Out"}</p>
            {/* <p>You're Logged In</p> */}
        </nav>
    );
}

/* ❗ your code here */
export default NavBar;