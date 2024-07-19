
import React from 'react';
import "../Pages/Skills.css";

const Footer = () => {
    return (
        <footer className="bg-light text-dark text-center py-3 footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <a href="https://github.com/manoj-hubgit" target="_blank" rel="noopener noreferrer" className="text-dark mx-3">
                            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/manoj312" target="_blank" rel="noopener noreferrer" className="text-dark mx-3">
                            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="mailto:manojannadurai2265@gmail.com" className="text-dark mx-3">
                            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
