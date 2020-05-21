import dispatcher from '../PizzaDispatcher'

class SchedulersActions{
    list(){
        dispatcher.handleViewAction({
            actionType : 'SCHEDULERS_LIST',
            payload : {}
        });
    }

    choose(chosen){
        dispatcher.handleViewAction({
            actionType : 'SCHEDULER_CHOOSE',
            payload : {
                chosen : chosen
            }
        });
    }
}
export default new SchedulersActions();

