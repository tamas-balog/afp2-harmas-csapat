import React from 'react';
import PizzaActions from "../../../../actions/PizzaActions";
import SchedulersActions from '../../../../actions/SchedulersActions';
import Schedulerstore from '../../../../stores/SchedulerStore';

class PizzasCRUD extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            ingredients: [{
                name : "",
            }],
            chosen : []      
        };
        this._onChange = this._onChange.bind(this);
        SchedulersActions.list();
    }
    _onChange(){
        this.setState({chosen : Schedulerstore._schedulers});
        SchedulersActions.list();
    }

    componentDidMount() {
        Schedulerstore.addChangeListener(this._onChange);
    }

    addIngredients(){
        this.setState({ingredients : [...this.state.ingredients, ""]})
    }
    handleChange(e,index){
        this.state.ingredients[index] = {}
        this.state.ingredients[index].name = e.target.value
        this.setState({ingredients: this.state.ingredients})
    }

    handleRemove(id){
        this.state.ingredients.splice(id,1)
        this.setState({ingredients: this.state.ingredients})
    }

    render() {
        return (
            <div>
                <h1>SCHEDULERS</h1>

                <div>{this.state.chosen.map((chosen)=>{
                    return (<p key={chosen.chosen.name}>{chosen.chosen.description}</p>)
                }
                )}</div>
                <select id="chosen">
                    <option value="ByPizza">By pizza</option>
                    <option value="ByOrder">By order</option>
                </select>
                <button
                    className="btn btn-info"
                    onClick={()=>{
                        SchedulersActions.list();
                        SchedulersActions.choose(
                            document.getElementById("chosen").value
                    );}}
                >Change
                </button>

                <h1>PIZZAS</h1>
                <table>
                    <tr>
                        <td>
                            <input
                                type={"text"} placeholder={"Pizza name"}
                                value={this.state.name}
                                onChange={(e) => {
                                    let st = this.state;
                                    st.name = e.target.value;
                                    this.setState(st);
                                }
                                }
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        PizzaActions.search(this.state.name);
                                    }
                                }}
                            /></td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type={"number"} placeholder={"Pizza price"} min = "0"
                                value={this.state.pizzaPrice}
                                onChange={(e) => {
                                    let st = this.state;
                                    st.pizzaPrice = e.target.value;
                                    this.setState(st);
                                }
                                }
                            /></td>
                    </tr>
                    <tr>
                    {
                        this.state.ingredients.map((ingredient, index)=>{
                            return (
                                <div key={index}>
                                    <input onChange={(e)=> this.handleChange(e,index)}
                                           value = {ingredient.name}
                                           type={"text"}
                                           placeholder={"Ingredient"}/>
                                           <button  className="btn btn-warning" onClick={()=>this.handleRemove(index)} >Remove </button>
                                </div>
                            )
                        })
                    }
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button
                                className="btn btn-info"
                                onClick={() => {PizzaActions.search(this.state.name)
                                }}
                            >Search by name
                            </button>
                            <button
                                className="btn btn-info"
                                onClick={()=>{PizzaActions.create(
                                    this.state.id,
                                    this.state.name,
                                    this.state.pizzaPrice,
                                    this.state.ingredients,
                                );}}
                            >Register
                            </button>
                            <button onClick={(e)=> this.addIngredients(e)}
                                className="btn btn-info"
                                >Add Ingredients
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default PizzasCRUD;