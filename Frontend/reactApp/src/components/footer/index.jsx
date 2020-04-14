import React from "react";


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer bg-danger p-3 fixed-bottom">
                <div className="container text-center">
                    <span className="text-light">
                         &copy; {new Date().getFullYear()} Copyright: <a href="https://hu.wikipedia.org/wiki/Pizza"> PIZZA </a>
                    </span>
                </div>
            </footer>
        )
    }
}

export default Footer;