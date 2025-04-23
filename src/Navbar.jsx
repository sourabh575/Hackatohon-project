import { Link } from "react-router-dom";
export default function Navbar(){
    return (
        <>
        <header className="navbar">
        <h1 className="logo">
          <em>Edugram</em>
        </h1>
        <nav className="nav-links">
          <Link to="/" className="active">Home</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Log out</Link>

        </nav>
      </header>

        </>
    )
}