import dispatcher from '../PizzaDispatcher'

class PreparationActions{
    search(id, preparedAt){
        dispatcher.handleViewAction({
            actionType : 'PREPARATION_SEARCH',
            payload : {
                id : id,
                preparedAt : preparedAt
            }
        });
    }
    update(preparedAt){
        dispatcher.handleViewAction({
            actionType : 'PREPARATION_UPDATE',
            payload : {
                preparedAt : preparedAt
            }
        });
    }
}

export default new PreparationActions;
