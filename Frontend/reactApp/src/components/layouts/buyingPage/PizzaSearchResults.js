import React from 'react';
import PizzaStore from '../../../stores/PizzaStore'
class PizzaSearchResults extends React.Component{

    constructor() {
        super();
        this.state = { pizzas : []};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({pizzas : PizzaStore._pizzas});
    }

    componentDidMount() {
        PizzaStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        PizzaStore.removeChangeListener(this._onChange);
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
                                <td>{pizza.name}</td>
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
