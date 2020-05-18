import dispatcher from '../PizzaDispatcher'

class PizzaSearchActions{

    search(pizzaName, ingredients){
        dispatcher.handleViewAction({
            actionType : 'PIZZA_SEARCH',
            payload : {
                pizzaName : pizzaName,
                ingredients : ingredients
            }
        });
    }
}
export default new PizzaSearchActions();
