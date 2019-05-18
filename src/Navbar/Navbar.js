import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <div className="pure-menu pure-menu-horizontal">
        <Link className=" pure-menu-heading pure-menu-link" to={"/"}>EVOKE</Link>
        <ul className="pure-menu-list">
            <li className="pure-menu-item">
            <Link className="pure-menu-link" to={"/collections"}>Collections</Link>
            </li>
            <li className="pure-menu-item">
                <Link className="pure-menu-link" to={"/entries"}>Entries</Link>
            </li>
        </ul>
    </div>
)

export default Navbar;