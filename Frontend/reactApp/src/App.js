import React, {Component} from "react";
import './App.scss';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

//Pages
import Navbar from "./components/navbar";
import HomePage from "./components/layouts/HomePage";
import AdminApp from "./components/layouts/adminPage/AdminApp";
import PizzaSearch from "./components/layouts/buyingPage/PizzaSearchBar";
import PizzaSearchResult from "./components/layouts/buyingPage/PizzaSearchResults";
import TestPage from "./components/layouts/TestPage";
import NotFound from "./components/layouts/404";
import Footer from "./components/footer";

/*function App() {
    return (
        <div>
            <Navbar/>
            <HomePage/>
            <Footer/>
        </div>
    );
}*/

class App extends Component {
    render() {
        return <Router>
            <Navbar/>
            <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/adminapp" component={AdminApp}/>
            <Route exact path="/pizzasearch" component={PizzaSearch}/>
                <Route exact path="/pizzasearchres" component={PizzaSearchResult}/>
            <Route exact path="/testpage" component={TestPage}/>
            <Route exact path="/404" component={NotFound}/>
            <Redirect to="/404"/>
            </Switch>
            <Footer/>
        </Router>
        //return <div className="App"><Navbar/>Hey<Footer/></div>;
    }
}

export default App;


