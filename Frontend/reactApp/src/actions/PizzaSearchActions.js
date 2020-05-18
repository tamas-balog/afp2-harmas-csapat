import dispatcher from '../PizzaDispatcher'

class PizzaSearchActions{

    search(name, ingredients){
        dispatcher.handleViewAction({
            actionType : 'PIZZA_SEARCH',
            payload : {
                name : name,
                ingredients : ingredients
            }
        });
    }
}
export default new PizzaSearchActions();
