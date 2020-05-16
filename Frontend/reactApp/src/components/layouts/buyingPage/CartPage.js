import React from 'react';
import PizzaSearchResults from "./PizzaSearchResults";
import PizzaStore from "../../../stores/PizzaStore";

var cart = PizzaSearchResults.returnCart();;
var pizzaName;
var price;

class CartPage extends React.Component {
    render() {
        return (
            <container>
                <div>
                    <h2>Vásárlás</h2>
                </div>
            </container>
        );
    }
};
export default CartPage;