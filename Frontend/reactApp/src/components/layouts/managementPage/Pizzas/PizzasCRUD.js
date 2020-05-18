import React from 'react';
import PizzaSearchActions from "../../../../actions/PizzaSearchActions";
import PizzaActions from "../../../../actions/PizzaActions";

class PizzasCRUD extends React.Component {

    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            ingredients: [{
                name : "",
                id : "",
            }],
        };
    }

    addIngredients(){
        this.setState({ingredients : [...this.state.ingredients, ""]})
    }
    handleChange(e,id){
        this.state.ingredients[id] = {}
        this.state.ingredients[id].name = e.target.value
        this.setState({ingredients: this.state.ingredients})
    }

    handleRemove(id){
        this.state.ingredients.splice(id,1)
       this.setState({ingredients: this.state.ingredients})
    }

    render() {
        return (
            <div>
                <table>
                    <td><input
                        type={"hidden"} min="0" placeholder="ID"
                        value={this.state.id}
                        onChange={(e)=>{
                            let st = this.state;
                            st.id = e.target.value;
                            this.setState(st);}
                        }
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                PizzaSearchActions.search(this.state.name, this.state.ingredients);
                            }
                        }}
                    /></td>
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
                                        PizzaSearchActions.search(this.state.name, this.state.ingredients);
                                    }
                                }}
                            /></td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type={"text"} placeholder={"Pizza price"}
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
                        this.state.ingredients.map((ingredient, id)=>{
                            return (
                                <div key={id}>
                                    <input onChange={(e)=> this.handleChange(e,id)}
                                           value = {ingredient.name}
                                           type={"text"}
                                           placeholder={"Ingredient"}/>
                                           <button  className="btn btn-warning" onClick={()=>this.handleRemove(id)} >Remove </button>
                                </div>
                            )
                        })
                    }
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button
                                className="btn btn-info"
                                onClick={() => {PizzaSearchActions.search(this.state.name, this.state.ingredients)
                                }}
                            >Search
                            </button>
                            <button
                                className="btn btn-info"
                                onClick={()=>{PizzaActions.create(
                                    this.state.id,
                                    this.state.name,
                                    this.state.pizzaPrice,
                                    this.state.ingredients,
                                );window.location.reload();}}
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