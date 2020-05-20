import {Dispatcher} from 'flux';
import axios from 'axios';
import Pizzastore from './stores/PizzaStore'
import Staffstore from "./stores/StaffStore";
import Deliverystore from "./stores/DeliveryStore";
import Preparationstore from "./stores/PreparationStore";
import Orderstore from "./stores/OrderStore";

class PizzaDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
            action : action
        });
    }
}

const dispatcher = new PizzaDispatcher();

dispatcher.register((payload)=>{
    if(payload.action.actionType === 'PIZZA_SEARCH'){
            axios.get('/pizzas').then((resp)=>{
                Pizzastore._pizzas = resp.data.filter((pizza)=>{
                    return pizza.name.includes(payload.action.payload.name)
                });
                Pizzastore.emitChange();
            })
        }
    if(payload.action.actionType === 'PIZZA_CREATE'){
        axios.post('/pizzas/record',{
            name : payload.action.payload.name,
            price : payload.action.payload.price,
            ingredients : payload.action.payload.ingredients
        }).then(resp=>{if(!alert("Pizza added successfully")){window.location.reload();}}).catch(error => {alert(error.response.data.message) });
    }
    if(payload.action.actionType === 'PIZZA_DELETE'){
        axios.delete('/pizzas/' + payload.action.payload.id).
        then(resp=>{console.log(resp.data)}).catch(err => console.log(err))
    }
    if(payload.action.actionType === 'STAFF_SEARCH') {
        if (payload.action.payload.firstName === "") {
            axios.get('/staff').then((resp)=>{
                Staffstore._staff = resp.data.filter((staff)=>{
                    return staff.firstName.includes(payload.action.payload.firstName)
                });
                Staffstore.emitChange();
            })
        }
        else {
            axios.get('/staff').then((resp) => {
                Staffstore._staff = resp.data.filter((staff) => {
                    return staff.firstName == payload.action.payload.firstName;
                });
                Staffstore.emitChange();
            })
        }
    }
    if(payload.action.actionType === 'STAFF_REGISTER'){
        axios.post('/staff/register',{
            positionCode : payload.action.payload.positionCode,
            firstName : payload.action.payload.firstName,
            lastName : payload.action.payload.lastName,
            email : payload.action.payload.email,
            phoneNumber : payload.action.payload.phoneNumber,
            password : payload.action.payload.password
        }).then(resp=>{console.log(resp.data)}).catch(err => {console.log(err) });
    }
    if(payload.action.actionType ==='STAFF_DELETE'){
        axios.delete('/staff/' + payload.action.payload.id)
            .then(resp=>{console.log(resp.data)}).catch(err => console.log(err))
    }
    if(payload.action.actionType === 'DELIVERY_SEARCH') {
        axios.get('/pizzas/delivery-lists').then((resp)=>{
            Deliverystore._deliveries = resp.data.filter((delivery)=>{
                return delivery;
            });
            Deliverystore.emitChange();
        })
    }
    if(payload.action.actionType === 'DELIVERY_UPDATE'){
        if(payload.action.payload.id !==''){
            axios.put('/pizzas/delivery-lists/' + payload.action.payload.id)
            .then(resp=>{console.log(resp.data)}).catch(err => {console.log(err) });
        }
    }
    if(payload.action.actionType === 'PREPARATION_SEARCH') {
            axios.get('/pizzas/preparation-lists').then((resp)=>{
                Preparationstore._preparations = resp.data.filter((preparation)=>{
                    return preparation;
                });
                Preparationstore.emitChange();
            })
    }
    if(payload.action.actionType === 'PREPARATION_UPDATE'){
            axios.put('/pizzas/preparation-lists/' + payload.action.payload.id)
                .then(resp=>{console.log(resp.data)}).catch(err => {console.log(err) });

    }
    if(payload.action.actionType === 'ORDER_LIST') {
            axios.get('/orders').then((resp)=>{
                Orderstore._orders = resp.data.filter((order)=>{
                    return order;
                });
                Orderstore.emitChange();
            })
        }
});


export default dispatcher;


