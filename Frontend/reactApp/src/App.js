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
import Header from "./components/Header";
import Navbar from "./components/navbar";
import HomePage from "./components/layouts/HomePage";
import AdminApp from "./components/layouts/adminPage/AdminApp";
import PizzaSearch from "./components/layouts/buyingPage/PizzaSearchBar";
import PizzaSearchResult from "./components/layouts/buyingPage/PizzaSearchResults";
import CartPage from "./components/layouts/buyingPage/CartPage";
import NotFound from "./components/layouts/404";
import Footer from "./components/footer";

function Menu() {
    return(
            <React.Fragment>
                <PizzaSearch />
                <div style={{paddingTop: "3%"}}>
                <PizzaSearchResult />
                </div>
            </React.Fragment>
    )
}

class App extends Component {
    render() {
        return <Router>
            <Header/>
            <Navbar/>
            <div style={{width: "60%", marginLeft: "20%", marginRight: "20%", marginBottom: "2%", paddingTop: "1%"}}>
            <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/adminapp" component={AdminApp}/>
            <Route exact path="/pizzasearch" component={PizzaSearch}/>
            <Route exact path="/pizzasearchres" component={PizzaSearchResult}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/cartpage" component={CartPage}/>
            <Route exact path="/404" component={NotFound}/>
            <Redirect to="/404"/>
            </Switch>
            </div>
            <Footer/>
        </Router>
    }
}

export default App;


