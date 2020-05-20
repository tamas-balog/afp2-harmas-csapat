import dispatcher from '../PizzaDispatcher'

class DeliveriesActions{
    list() {
        dispatcher.handleViewAction({
            actionType : 'DELIVERY_SEARCH',
            payload : {
            }
        });
    }
    update(id){
        dispatcher.handleViewAction({
            actionType : 'DELIVERY_UPDATE',
            payload : {
                id : id
            }
        });
    }
}

export default new DeliveriesActions;
