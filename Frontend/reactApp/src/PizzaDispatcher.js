import {Dispatcher} from 'flux';
import axios from 'axios';
import store from './stores/PizzaStore'

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
    if(payload.action.payload.pizzaName !== ''){
        axios.get('/pizzas').then((resp)=>{
            store._pizzas = resp.data.filter((pizza)=>{
                console.log(pizza.pizzaName)
                return pizza.pizzaName.includes(payload.action.payload.pizzaName)
            });
            store.emitChange();
        });
    }
    if(payload.action.payload.ingredients !== '') {
        axios.get('/pizzas').then((resp)=>{
            store._pizzas = resp.data.filter((pizza)=>{
                console.log(payload.action.payload.ingredients)
                for (let i = 0; i < pizza.ingredients.length; i++) {
                    if(payload.action.payload.ingredients === pizza.ingredients[i].name)
                        return true;
                }
                return false
            });
            store.emitChange();
        });
    }
    else
    {
        axios.get('/pizzas').then((resp)=>{
            store._pizzas = resp.data.filter((pizza)=>{
                return pizza.pizzaName.includes(payload.action.payload.pizzaName)
            });
            store.emitChange();
        });
    }
    }
});

export default dispatcher;


