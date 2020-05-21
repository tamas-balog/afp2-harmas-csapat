import React from 'react';
import Deliverystore from "../../../../stores/DeliveryStore";
import DeliveriesActions from '../../../../actions/DeliveriesActions'

class DeliveriesResult extends React.Component{

    constructor(){
        super();
        this.state = {deliveries : []};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({deliveries : Deliverystore._deliveries})
        DeliveriesActions.list();
    }

    componentDidMount(){
        Deliverystore.addChangeListener(this._onChange)
        DeliveriesActions.list();
    }

    componentWillUnmount(){
        Deliverystore.removeChangeListener(this._onChange);
    }

    render(){
        return(
            <table className="table table-dark">
                <thead>
                <tr>
                    <td>Delivery man</td>
                    <td>Customer name</td>
                    <td>Postal code</td>
                    <td>Street</td>
                    <td>Phone number</td>
                    <td>Comments</td>
                    <td>Pizzas</td>
                    <td>Delivered</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.deliveries.map((delivery)=>{
                        return(
                            <tr key={delivery.id}>
                                <td>{delivery.employee.firstName + " " + delivery.employee.lastName}</td>
                                <td>{delivery.customer.firstName + " " + delivery.customer.lastName}</td>
                                <td>{delivery.customer.postalCode}</td>
                                <td>{delivery.customer.street}</td>
                                <td>{delivery.customer.phoneNumber}</td>
                                <td>{delivery.customer.comments}</td>
                                <td><ol>{delivery.pizzas.map((pizza)=> {
                                    console.log(pizza);
                                    return (<li key={delivery.id + pizza.pizza.name}> {pizza.pizza.name}</li>)
                                })}
                                </ol></td>
                            <button
                                className="btn btn-info"
                                onClick={()=>{
                                    DeliveriesActions.update(
                                        delivery.id,
                                    );}}
                            >Done
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
export default DeliveriesResult;