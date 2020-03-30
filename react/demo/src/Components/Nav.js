import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                <button type="button">
                    Home
                    </button>
            </a>
            <a className="navbar-brand" href="/userlist">
                <button type="button"
                >
                    userList
                    </button>
            </a>

        </nav>
    );
}

export default Nav;