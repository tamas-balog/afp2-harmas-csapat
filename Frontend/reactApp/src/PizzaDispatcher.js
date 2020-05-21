import {Dispatcher} from 'flux';
import axios from 'axios';
import Pizzastore from './stores/PizzaStore'
import Staffstore from "./stores/StaffStore";
import Deliverystore from "./stores/DeliveryStore";
import Preparationstore from "./stores/PreparationStore";
import Orderstore from "./stores/OrderStore";
import Schedulerstore from "./stores/SchedulerStore";

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
        axios.delete('/pizzas/' + payload.action.payload.id)
        .then(resp=>{console.log(resp.data)}).catch(err => console.log(err))
    }
    if(payload.action.actionType === 'STAFF_SEARCH') {
        if (payload.action.payload.firstName === "" && payload.action.payload.lastName === "") {
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
                    if (payload.action.payload.firstName !== "") 
                        return staff.firstName == payload.action.payload.firstName;
                    else if(payload.action.payload.lastName !== "")
                        return staff.lastName == payload.action.payload.lastName;
                    else
                        return staff.firstName == payload.action.payload.firstName && 
                            staff.lastName == payload.action.payload.lastName;
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
        }).then(resp=>{if(!alert(resp.data)){window.location.reload();}}).catch(err => {alert(err.response.data.message) });
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
    if(payload.action.actionType === 'ORDER_SUBMIT'){
        axios.post('/orders/record', {
            customer : payload.action.payload.customer,
            pizzas : payload.action.payload.pizzas
        }).then(resp=>{if(!alert(resp.data)){window.location.reload();}}).catch(err => {alert(err.response.data.message) });
    }
    
    if(payload.action.actionType === 'SCHEDULERS_LIST') {
        axios.get('/algorithms').then((resp)=>{
            Schedulerstore._schedulers = resp.data.filter((scheduler)=>{
                return scheduler;
            });
            Schedulerstore.emitChange();
        })
    }

    if(payload.action.actionType === 'SCHEDULER_CHOOSE'){
        axios.put('/algorithms/choose', {
            chosen : payload.action.payload.chosen
        }).then(resp=>{console.log(resp.data)}).catch(err => {console.log(err) });
    }
});


export default dispatcher;


