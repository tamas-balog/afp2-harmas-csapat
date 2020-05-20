import dispatcher from '../PizzaDispatcher'

class ToCartActions{

    add(customer, pizzas){
        dispatcher.handleViewAction({
            actionType : 'TO_CART',
            payload : {
                customer : customer,
                pizzas : pizzas
            }
        });
    }
}
export default new ToCartActions();