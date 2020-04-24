import React from 'react';
import './App.scss';
import './index.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import BuyingPage from "./components/layouts/buyingPage/buyingPage";

function App() {
    return (
        <div>
            <Navbar/>
            <BuyingPage/>
            <Footer/>
        </div>
    );
}

export default App;

