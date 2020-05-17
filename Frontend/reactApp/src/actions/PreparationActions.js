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
    update(sequentialNumber, id, preparedAt){
        dispatcher.handleViewAction({
            actionType : 'PREPARATION_UPDATE',
            payload : {
                sequentialNumber : sequentialNumber,
                id : id,
                preparedAt : preparedAt
            }
        });
    }
}

export default new PreparationActions;
