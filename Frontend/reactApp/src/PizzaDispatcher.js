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
                    return pizza.pizzaName.includes(payload.action.payload.pizzaName)
                });
                Pizzastore.emitChange();
            })
        }
    if(payload.action.actionType === 'PIZZA_CREATE'){
        axios.post('/pizzas',{
            id : payload.action.payload.id,
            pizzaName : payload.action.payload.pizzaName,
            pizzaPrice : payload.action.payload.pizzaPrice,
            ingredients : payload.action.payload.ingredients
        }).then(resp=>{console.log(resp.data)}).catch(err => {console.log(err) });
    }
    if(payload.action.actionType === 'PIZZA_DELETE'){
        axios.delete('/pizzas/' + payload.action.payload.id).
        then(resp=>{console.log(resp.data)}).catch(err => console.log(err))
    }
    if(payload.action.actionType === 'STAFF_SEARCH') {
        if (payload.action.payload.id === "") {
            axios.get('/employees').then((resp)=>{
                Staffstore._staff = resp.data.filter((employee)=>{
                    return employee.firstName.includes(payload.action.payload.firstName)
                });
                Staffstore.emitChange();
            })
        }
        else {
            axios.get('/employees').then((resp) => {
                Staffstore._staff = resp.data.filter((employee) => {
                    return employee.id == payload.action.payload.id;
                });
                Staffstore.emitChange();
            })
        }
    }
    if(payload.action.actionType === 'STAFF_REGISTER'){
        axios.post('/employees',{
            id : payload.action.payload.id,
            positionCode : payload.action.payload.positionCode,
            firstName : payload.action.payload.firstName,
            lastName : payload.action.payload.lastName,
            email : payload.action.payload.email,
            phoneNumber : payload.action.payload.phoneNumber,
            password : payload.action.payload.password
        }).then(resp=>{console.log(resp.data)}).catch(err => {console.log(err) });
    }
    if(payload.action.actionType ==='STAFF_DELETE'){
        axios.delete('/employees/' + payload.action.payload.id).
        then(resp=>{console.log(resp.data)}).catch(err => console.log(err))
    }
    if(payload.action.actionType === 'STAFF_UPDATE'){
        if(payload.action.payload.id !==''){
            axios.put('/employees/' + payload.action.payload.id,{
                id : payload.action.payload.id,
                positionCode : payload.action.payload.positionCode,
                firstName : payload.action.payload.firstName,
                lastName : payload.action.payload.lastName,
                email : payload.action.payload.email,
                phoneNumber : payload.action.payload.phoneNumber,
                password : payload.action.payload.password
            }).then(resp=>{console.log(resp.data)}).catch(err => {console.log(err) });
        }
    }
    if(payload.action.actionType === 'DELIVERY_SEARCH') {
        if (payload.action.payload.id === "") {
            axios.get('/deliveries').then((resp)=>{
                Deliverystore._deliveries = resp.data.filter((delivery)=>{
                    return delivery.deliveredAt.includes(payload.action.payload.deliveredAt)
                });
                Deliverystore.emitChange();
            })
        }
        else {
            axios.get('/deliveries').then((resp) => {
                Deliverystore._deliveries = resp.data.filter((delivery) => {
                    return delivery.id == payload.action.payload.id;
                });
                Deliverystore.emitChange();
            })
        }
    }
    if(payload.action.actionType === 'DELIVERY_UPDATE'){
        if(payload.action.payload.id !==''){
            axios.put('/deliveries/' + payload.action.payload.id,{
                deliveredAt : payload.action.payload.deliveredAt,
            }).then(resp=>{console.log(resp.data)}).catch(err => {console.log(err) });
        }
    }
    if(payload.action.actionType === 'PREPARATION_SEARCH') {
        if (payload.action.payload.id === "") {
            axios.get('/preppizzas').then((resp)=>{
                Preparationstore._preparations = resp.data.filter((preparation)=>{
                    return preparation.preparedAt.includes(payload.action.payload.preparedAt)
                });
                Preparationstore.emitChange();
            })
        }
        else {
            axios.get('/preppizzas').then((resp) => {
                Preparationstore._preparations = resp.data.filter((preparation) => {
                    return preparation.id == payload.action.payload.id;
                });
                Preparationstore.emitChange();
            })
        }
    }
    if(payload.action.actionType === 'PREPARATION_UPDATE'){
        if(payload.action.payload.id !==''){
            axios.put('/preppizzas/' + payload.action.payload.id,{
                sequentialNumber: payload.sequentialNumber,
                id : payload.action.payload.id,
                preparedAt : payload.action.payload.preparedAt,
            }).then(resp=>{console.log(resp.data)}).catch(err => {console.log(err)
            });
        }
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
