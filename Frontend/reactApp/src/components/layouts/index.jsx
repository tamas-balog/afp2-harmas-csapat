import React, { Component } from 'react';
import Navbar from '../navbar/';
import Footer from '../footer/';

class HomePage extends Component {
    render () {
        return (
            <React.Fragment>
          <Navbar />
          <Footer />
            </React.Fragment>
        );
    }
}

export default HomePage;