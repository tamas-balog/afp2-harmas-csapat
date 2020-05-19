import React from 'react';
import Orderstore from "../../../../stores/OrderStore";

class OrdersResult extends React.Component{

    constructor(){
        super();
        this.state = {orders : []};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({orders : Orderstore._orders})
    }

    componentDidMount(){
        Orderstore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        Orderstore.removeChangeListener(this._onChange);
    }

    render(){
        return(
            <table className="table table-dark">
                <thead>
                <tr>
                    <td>User first name</td>
                    <td>User last name</td>
                    <td>Postal code</td>
                    <td>Street</td>
                    <td>Phone number</td>
                    <td>Comments</td>
                    <td>Delivered</td>
                    <td>Pizzas</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.orders.map((order)=>{
                        return(
                            <tr key={order.customer.firstName}>
                                <td>{order.customer.firstName}</td>
                                <td>{order.customer.lastName}</td>
                                <td>{order.customer.postalCode}</td>
                                <td>{order.customer.street}</td>
                                <td>{order.customer.phoneNumber}</td>
                                <td>{order.customer.comments}</td>
                                <td>{order.delivered ? "Delivered":"Not delivered"}</td>
                                <td><ol>{order.pizzas.map((pizza)=>{
                                    return (<li key={order.customer.firstName+pizza.pizza.name}>{pizza.pizza.name}</li>)
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
export default OrdersResult;