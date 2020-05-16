import React, { useState } from 'react';
import PizzaSearchActions from "../../../actions/PizzaSearchActions";

class PizzaSearchBar extends React.Component {

    constructor() {
        super();
        this.state = {
            pizzaName: "",
            ingredients: ""
        };
    }

    render() {
        return (
            <div>
                <h2 style={{textAlign: "center", paddingBottom: "20px"}}>Válasszon széleskörű pizza kínálatunkból!</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>Pizza neve: </td>
                        <td>
                            <input
                                type={"text"}
                                value={this.state.pizzaName}
                                onChange={(e) => {
                                    let st = this.state;
                                    st.pizzaName = e.target.value;
                                    this.setState(st);
                                    }
                                }
                            /></td>
                    </tr>

                    <tr>
                        <td>Összetevő neve: </td>
                        <td>
                            <input
                                type={"text"}
                                value={this.state.ingredients}
                                onChange={(e) => {
                                    let st = this.state;
                                    st.ingredients = e.target.value;
                                    this.setState(st);
                                }}
                            /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button
                                className="btn btn-info"
                                onClick={() => {PizzaSearchActions.search(this.state.pizzaName, this.state.ingredients);  console.log(this.state.pizzaName); //window.location.reload(false);
                                } }
                            >Search
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PizzaSearchBar;