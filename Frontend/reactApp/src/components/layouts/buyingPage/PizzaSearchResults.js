import React from 'react';
import PizzaStore from '../../../stores/PizzaStore'
import PizzaSearchActions from "../../../actions/PizzaSearchActions";
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

            /*<container  style={{width: "100%", border: "1px solid black"}}>
                <div className="picture" style={{width: "30%", border: "1px solid black"}}></div>
                <div style={{width: "70%"}}>
                    {
                    this.state.pizzas.map((pizza)=>{
                    return (
                    <div>
                    <h4>Name:</h4> {pizza.pizzaName}
                    <p>Ingredients:</p>
                        <ol>{pizza.ingredients.map((ingredient)=>{
                        return (<li key={pizza.id+ingredient.name}>{ingredient.name}</li>)
                    })}</ol>
                        <p>Price:</p>
                    </div>
                    );
                    })}
                    <button
                        className="btn btn-info"
                    >To Cart
                    </button>
                </div>
            </container>*/
        );
    }
}

export default PizzaSearchResults;
