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
    create(id, name, price, ingredients){
        dispatcher.handleViewAction({
            actionType : 'PIZZA_CREATE',
            payload : {
                id : id,
                name : name,
                price : price,
                ingredients: ingredients
            }
        });
    }
}

export default new PizzaActions();
