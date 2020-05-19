import React from 'react';
import Pizzastore from "../../../../stores/PizzaStore";
import PizzaActions from "../../../../actions/PizzaActions";

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
                                <td>{pizza.name}</td>
                                <td>{pizza.price}</td>
                                <td><ol>{pizza.ingredients.map((ingredient)=>{
                                    return (<li key={pizza.id+ingredient.name}>{ingredient.name}</li>)
                                })}</ol></td>
                            <button
                                className="btn btn-info"
                                onClick={()=>{
                                    PizzaActions.delete(pizza.id);
                                    window.location.reload();}
                                }
                            >Delete
                            </button>
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
