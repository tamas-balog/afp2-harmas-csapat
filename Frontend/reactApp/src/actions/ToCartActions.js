import dispatcher from '../PizzaDispatcher'

class ToCartActions{

    add(pizzaName, ingredients){
        dispatcher.handleViewAction({
            actionType : 'TO_CART',
            payload : {
                pizzaName : pizzaName,
                ingredients : ingredients
            }
        });
    }
}
export default new ToCartActions();