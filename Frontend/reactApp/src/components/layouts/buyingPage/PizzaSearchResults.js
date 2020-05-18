import React from 'react';
import Pizzastore from '../../../stores/PizzaStore';

class PizzaSearchResults extends React.Component{

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
                    <td>Pizza Name</td>
                    <td>Ingredients</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.pizzas.map((pizza)=>{
                        return (
                            <tr key={pizza.id}>
                                <td>{pizza.pizzaName}</td>
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

export default PizzaSearchResults;