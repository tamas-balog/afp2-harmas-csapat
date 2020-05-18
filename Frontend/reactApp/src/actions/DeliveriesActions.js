import dispatcher from '../PizzaDispatcher'

class DeliveriesActions{
    search(id, deliveredAt){
        dispatcher.handleViewAction({
            actionType : 'DELIVERY_SEARCH',
            payload : {
                id : id,
                deliveredAt : deliveredAt
            }
        });
    }
    update(deliveredAt){
        dispatcher.handleViewAction({
            actionType : 'DELIVERY_UPDATE',
            payload : {
                deliveredAt : deliveredAt
            }
        });
    }
}

export default new DeliveriesActions;
