import React from 'react';
import Pizzastore from "../../../../stores/PizzaStore";

class PizzasResults extends React.Component{

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
            <table className="table table-dark">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Pizza Name</td>
                    <td>Pizza price</td>
                    <td>Ingredients</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.pizzas.map((pizza)=>{
                        return (
                            <tr key={pizza.id}>
                                <td>{pizza.id}</td>
                                <td>{pizza.pizzaName}</td>
                                <td>{pizza.pizzaPrice}</td>
                                <td><ol>{pizza.ingredients.map((ingredient)=>{
                                    return (<li key={pizza.id+ingredient.name}>{ingredient.name}</li>)
                                })}</ol></td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default PizzasResults;
