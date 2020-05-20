import React from 'react';
import Pizzastore from '../../../stores/PizzaStore';
import Cartstore from '../../../stores/CartStore';
import PizzaSearchActions from "../../../actions/PizzaSearchActions";


class PizzaSearchResults extends React.Component{
    toCart(id) {
        var pizza = {id : id}
        Cartstore.addPizza(pizza);
        console.log(Cartstore._orders);
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
                    <td>Name: </td>
                    <td>Ingredients:</td>
                    <td>Price:</td>
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
                        <td>{pizza.price}</td>
                    <td><button className="btn btn-info"
                    onClick={() => {this.toCart(pizza.id)} }
                    >To Cart</button></td>
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
