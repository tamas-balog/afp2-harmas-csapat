import React from 'react';
import PizzaActions from "../../../actions/PizzaActions";
import Cartstore from '../../../stores/CartStore';
import OrderActions from "../../../actions/OrderActions";

class PizzaSearchBar extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            ingredients: "",
            customer: {
                firstName: "",
                lastName: "",
                postalCode: "",
                street: "",
                streetNumber: "",
                phoneNumber: "",
                comments: ""
            },
            pizzas: []
        };
    }

    render() {
        return (
            <div>
                <h2 style={{textAlign: "center", paddingBottom: "20px"}}>Please, give us your personal data to complete the order.</h2>
                <table>
                <tbody>
                <tr>
                    <td>First Name:</td>
                    <td>
                        <input
                            type={"text"}
                            value={this.state.customer.firstName}
                            onChange={(e) => {
                                let st = this.state;
                                st.customer.firstName = e.target.value;
                                this.setState(st);
                            }
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td>
                        <input
                            type={"text"}
                            value={this.state.customer.lastName}
                            onChange={(e) => {
                                let st = this.state;
                                st.customer.lastName = e.target.value;
                                this.setState(st);
                            }
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <td>Postal code:</td>
                    <td>
                        <input
                            type={"number"}
                            value={this.state.customer.postalCode}
                            onChange={(e) => {
                                let st = this.state;
                                st.customer.postalCode = e.target.value;
                                this.setState(st);
                            }
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <td>Street:</td>
                    <td>
                        <input
                            type={"text"}
                            value={this.state.customer.street}
                            onChange={(e) => {
                                let st = this.state;
                                st.customer.street = e.target.value;
                                this.setState(st);
                            }
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <td>Street number:</td>
                    <td>
                        <input
                            type={"number"} min = {"0"}
                            value={this.state.customer.streetNumber}
                            onChange={(e) => {
                                let st = this.state;
                                st.customer.streetNumber = e.target.value;
                                this.setState(st);
                            }
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <td>Phone number:</td>
                    <td>
                        <input
                            type={"text"}
                            value={this.state.customer.phoneNumber}
                            onChange={(e) => {
                                let st = this.state;
                                st.customer.phoneNumber = e.target.value;
                                this.setState(st);
                            }
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <td>Comments:</td>
                    <td>
                        <input
                            type={"text"}
                            value={this.state.customer.comments}
                            onChange={(e) => {
                                let st = this.state;
                                st.customer.comments = e.target.value;
                                this.setState(st);
                            }
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <button
                        className="btn btn-info"
                        onClick={() => {OrderActions.register(this.state.customer, Cartstore._orders.pizzas)}}
                    >Order
                    </button>
                </tr>
                </tbody>
                </table>
                <h2 style={{textAlign: "center", paddingBottom: "20px"}}>Choose from our wide selection!</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>Pizza name: </td>
                        <td>
                            <input
                                type={"text"}
                                value={this.state.name}
                                onChange={(e) => {
                                    let st = this.state;
                                    st.name = e.target.value;
                                    this.setState(st);
                                    }
                                }
                            /></td>
                    </tr>

                    <tr>
                        <td>Ingredients name: </td>
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

                                onClick={() => {PizzaActions.search(this.state.name, this.state.ingredients);
                                }}
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