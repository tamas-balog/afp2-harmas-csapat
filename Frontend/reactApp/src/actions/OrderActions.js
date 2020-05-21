import dispatcher from '../PizzaDispatcher'

class OrderListActions{
    list(){
        dispatcher.handleViewAction({
            actionType : 'ORDER_LIST',
            payload : {}
        });
    }

    register(customer, pizzas){
        dispatcher.handleViewAction({
            actionType : 'ORDER_SUBMIT',
            payload : {
                customer : customer,
                pizzas : pizzas
            }
        });
    }
}
export default new OrderListActions();

