import React from "react";
import styled from 'styled-components'

function Footer() {
        return (
            <FooterContainer className="main-footer">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                        {/*Column 1*/}
                        <div className="col-md-3 col-sm-6">
                            <h3>Contact us</h3>
                            <ul className="list-unstyled">
                                <li>3300, Eger</li>
                                <li>Dobó utca 7.</li>
                                <li>Phone: 06-099-9999</li>
                                <li>Email: pizzacorner@corner.com</li>
                             </ul>
                        </div>
                    {/*Column 2*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Useful pages</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Privacy & Policy</a></li>
                            <li><a href="/">Delivery information</a></li>
                            <li><a href="/">User end license</a></li>
                            <li><a href="/">Return money policy</a></li>
                        </ul>
                    </div>
                    {/*Column 3*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Find us here</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com/">Facebook</a></li>
                            <li><a href="https://www.instagram.com/">Instagram</a></li>
                            <li><a href="https://twitter.com/">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                {/*Footer bottom*/}
                <div className="footer-bottom">
                    <p className="text-xs-center">&copy;{new Date().getFullYear()} AFP2 Hármas csapat - All rigths reserved.</p>
                </div>
                </div>
                </div>
            </FooterContainer>
        )
}
export default Footer;

const FooterContainer = styled.footer`
    html,body { height:100%; margin: 0; padding: 0 ; flex: 1 0 auto;}
    
    .footer-middle {
        background: #343a40;
        padding-top: 3rem;
        margin-top: 10%;
        color: #fff;
        position: relative;
        left: 0;
        bottom: 0;
        width: 100%;
    }
    
    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    ul li a {
        color: #6D6D6D;
    }
    
    ul li a:hover {
        color: #acacac;
    }
`;
