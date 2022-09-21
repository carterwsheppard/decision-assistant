import React from "react";

const copyrightSymbol = String.fromCharCode(169);

function Footer() {
    return (
        <footer className="footer flex center">
            <p>{copyrightSymbol}2022 Created by <a href="https://www.github.com/carterwsheppard">Carter</a>, <a href="https://www.github.com/Seeker-09">David</a>, and <a href="https://www.github.com/hoganrsherrow">Hogan</a> using the MERN Stack</p>
        </footer>
    );
}


export default Footer;