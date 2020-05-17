import dispatcher from '../PizzaDispatcher'

class PizzaActions{

    delete(id){
        dispatcher.handleViewAction({
            actionType : 'PIZZA_DELETE',
            payload : {
                id : id
            }
        });
    }
    create(id, pizzaName, pizzaPrice, ingredients){
        dispatcher.handleViewAction({
            actionType : 'PIZZA_CREATE',
            payload : {
                id : id,
                pizzaName : pizzaName,
                pizzaPrice : pizzaPrice,
                ingredients: ingredients
            }
        });
    }
}

export default new PizzaActions();
