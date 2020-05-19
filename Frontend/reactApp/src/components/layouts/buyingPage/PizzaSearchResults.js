import React from 'react';
import PizzaStore from '../../../stores/PizzaStore'
import PizzaSearchActions from "../../../actions/PizzaSearchActions";

var pizzastocart = [];

class PizzaSearchResults extends React.Component{
    toCart(pizzaName, pizzaPrice) {
        var pizza = [pizzaName, pizzaPrice]
        pizzastocart.push(pizza)

        console.log(pizzastocart);
    }

    static returnCart() {
        return pizzastocart
    }

    constructor() {
        super();
        this.state = { pizzas : []};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({pizzas : Pizzastore._pizzas});
    }

    componentDidMount() {
        Pizzastore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        Pizzastore.removeChangeListener(this._onChange);
    }

    render(){
        return(
            <table className="table">
                <thead>
                <tr>
                    <td>Név: </td>
                    <td>Összetevők:</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.pizzas.map((pizza)=>{
                        return (
                            <tr key={pizza.id}>
                                <td>{pizza.name}</td>
                                <td><ol>{pizza.ingredients.map((ingredient)=>{
                                    return (<li key={pizza.id+ingredient.name}>{ingredient.name}</li>)
                                })}</ol></td>
                                <td><button className="btn btn-info"
                                            onClick={() => {this.toCart(pizza.pizzaName, pizza.pizzaPrice)} }
                                >Kosárba</button></td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default PizzaSearchResults;
