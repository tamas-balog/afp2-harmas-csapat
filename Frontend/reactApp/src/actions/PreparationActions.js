import dispatcher from '../PizzaDispatcher'

class PreparationActions{
    search(id, prepared){
        dispatcher.handleViewAction({
            actionType : 'PREPARATION_SEARCH',
            payload : {
                id : id,
                prepared : prepared
            }
        });
    }
    update(sequentialNumber, id,name, prepared){
        dispatcher.handleViewAction({
            actionType : 'PREPARATION_UPDATE',
            payload : {
                sequentialNumber : sequentialNumber,
                id : id,
                name : name,
                prepared : prepared
            }
        });
    }
}

export default new PreparationActions;
