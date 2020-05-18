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
                    <td>City</td>
                    <td>Address</td>
                    <td>Phone number</td>
                    <td>Comments</td>
                    <td>Delivery at</td>
                    <td>Pizzas</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.orders.map((order)=>{
                        return(
                            <tr key={order.user.firstName}>
                                <td>{order.user.firstName}</td>
                                <td>{order.user.lastName}</td>
                                <td>{order.user.city}</td>
                                <td>{order.user.address}</td>
                                <td>{order.user.phoneNumber}</td>
                                <td>{order.user.comments}</td>
                                <td>{order.deliveryAt}</td>
                                <td><ol>{order.pizzas.map((pizza)=>{
                                    return (<li key={order.user.firstName+pizza.pizzaName}>{pizza.pizzaName}</li>)
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