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
    update(sequentialNumber, id,name, preparedAt){
        dispatcher.handleViewAction({
            actionType : 'PREPARATION_UPDATE',
            payload : {
                sequentialNumber : sequentialNumber,
                id : id,
                name : name,
                preparedAt : preparedAt
            }
        });
    }
}

export default new PreparationActions;
