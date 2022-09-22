import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid px-5 w-75">
                <span className="navbar-brand h1 mr-auto">AxPhone</span>

                <ul className="nav navbar-nav d-flex">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">
                            Contacts
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/create-contact">
                            Add
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
