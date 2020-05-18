import dispatcher from '../PizzaDispatcher'

class OrderListActions{

    list(){
        dispatcher.handleViewAction({
            actionType : 'ORDER_LIST',
            payload : {}
        });
    }
}
export default new OrderListActions();
