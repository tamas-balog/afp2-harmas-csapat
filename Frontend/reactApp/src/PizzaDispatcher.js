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
    if(payload.action.actionType !== 'PIZZA_SEARCH'){
        return;
    }
    if(payload.action.payload.pizzaName !== ''){
        console.log('Név szerinti keresés');
        axios.get('/pizzas').then((resp)=>{
            store._pizzas = resp.data.filter((pizza)=>{
                return pizza.pizzaName.includes(payload.action.payload.pizzaName)
            });
            store.emitChange();
        });
    }
    else if(payload.action.payload.ingredients !== '') {
        console.log('Összetevő szerinti keresés');
        axios.get('/pizzas').then((resp)=>{
            store._pizzas = resp.data.filter((pizza)=>{
                return pizza.ingredients.includes(payload.action.payload.ingredients)
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
});

export default dispatcher;


