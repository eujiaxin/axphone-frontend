import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid px-5 w-75">
                <span className="navbar-brand h1 mr-auto">
                    <a
                        href="/"
                        className="fw-bold text-decoration-none text-reset"
                    >
                        AxPhone
                    </a>
                </span>

                <ul className="nav navbar-nav d-flex">
                    <li className="nav-item">
                        <a className="nav-link active" href="/create-contact">
                            Create New Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
