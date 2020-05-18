import React from 'react';
import PizzaSearchActions from "../../../../actions/PizzaSearchActions";
import PizzaActions from "../../../../actions/PizzaActions";

class PizzasCRUD extends React.Component {

    constructor() {
        super();
        this.state = {
            id: "",
            pizzaName: "",
            ingredients: [{
                name : "",
                id : "",
            }],
            ingredientsId : 0
        };
    }

    addIngredients(){
        this.setState({ingredients : [...this.state.ingredients, ""]})
    }
    handleChange(e,id){
        this.state.ingredients[id] = {}
        this.state.ingredients[id].name = e.target.value
        this.state.ingredients[id].id = this.state.ingredientsId
        this.setState({ingredientsId : ++this.state.ingredientsId})
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
                        type={"number"} min="0" placeholder="ID"
                        value={this.state.id}
                        onChange={(e)=>{
                            let st = this.state;
                            st.id = e.target.value;
                            this.setState(st);}
                        }
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                PizzaSearchActions.search(this.state.pizzaName, this.state.ingredients);
                            }
                        }}
                    /></td>
                    <tr>
                        <td>
                            <input
                                type={"text"} placeholder={"Pizza name"}
                                value={this.state.pizzaName}
                                onChange={(e) => {
                                    let st = this.state;
                                    st.pizzaName = e.target.value;
                                    this.setState(st);
                                }
                                }
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        PizzaSearchActions.search(this.state.pizzaName, this.state.ingredients);
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
                                onClick={() => {PizzaSearchActions.search(this.state.pizzaName, this.state.ingredients)
                                }}
                            >Search
                            </button>
                            <button
                                className="btn btn-info"
                                onClick={()=>{PizzaActions.create(
                                    this.state.id,
                                    this.state.pizzaName,
                                    this.state.pizzaPrice,
                                    this.state.ingredients,
                                );window.location.reload();}}
                            >Register
                            </button>
                            <button onClick={(e)=> this.addIngredients(e)}
                                className="btn btn-info"
                                >Add Ingredients
                            </button>
                            <button
                                className="btn btn-info"
                                onClick={()=>{
                                    PizzaActions.delete(this.state.id);
                                    window.location.reload();}
                                }
                            >Delete
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default PizzasCRUD;