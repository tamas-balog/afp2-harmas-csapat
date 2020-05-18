import React from 'react';
import Deliverystore from "../../../../stores/DeliveryStore";

class DeliveriesResult extends React.Component{

    constructor(){
        super();
        this.state = {deliveries : []};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({deliveries : Deliverystore._deliveries})
    }

    componentDidMount(){
        Deliverystore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        Deliverystore.removeChangeListener(this._onChange);
    }

    render(){
        return(
            <table className="table table-dark">
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Delivery man</td>
                    <td>Delivery at</td>
                    <td>User first name</td>
                    <td>User last name</td>
                    <td>Postal code</td>
                    <td>City</td>
                    <td>Address</td>
                    <td>Phone number</td>
                    <td>Comments</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.deliveries.map((delivery)=>{
                        return(
                            <tr key={delivery.id}>
                                <td>{delivery.id}</td>
                                <td>{delivery.name}</td>
                                <td>{delivery.deliveredAt}</td>
                                <td>{delivery.user.firstName}</td>
                                <td>{delivery.user.lastName}</td>
                                <td>{delivery.user.postalCode}</td>
                                <td>{delivery.user.city}</td>
                                <td>{delivery.user.address}</td>
                                <td>{delivery.user.phoneNumber}</td>
                                <td>{delivery.user.comments}</td>
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