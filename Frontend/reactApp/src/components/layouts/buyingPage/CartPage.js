import React from 'react';
import PizzaSearchResults from "./PizzaSearchResults";
import PizzaStore from "../../../stores/PizzaStore";

class CartPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <container>
                <div>
                    <h2>Vásárlás</h2>
                    {
                        /*this.state.pizzatocart.map((pizza)=>{
                            return (
                                <tr key={pizza.name}>
                                    <td>{pizza.name}</td>
                                    <td>{pizza.price}</td>
                                </tr>
                            );
                        })*/
                    }
                </div>
            </container>
        );
    }
};
export default CartPage;