import dispatcher from '../PizzaDispatcher'

class PreparationActions{
    list(){
        dispatcher.handleViewAction({
            actionType : 'PREPARATION_SEARCH',
            payload : {
            }
        });
    }
    update(id){
        dispatcher.handleViewAction({
            actionType : 'PREPARATION_UPDATE',
            payload : {
                id : id
            }
        });
    }
}

export default new PreparationActions();
