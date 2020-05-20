import dispatcher from '../PizzaDispatcher'
import Cartstore from "../stores/CartStore";

class OrderListActions{
    list(){
        dispatcher.handleViewAction({
            actionType : 'ORDER_LIST',
            payload : {}
        });
    }

    /*register(firstName, lastName, postalCode, street, streetNumber, phoneNumber, comments){
        dispatcher.handleViewAction({
            actionType : 'ORDER_SUBMIT',
            payload : {
                firstName : firstName,
                lastName : lastName,
                postalCode : postalCode,
                street : street,
                streetName : streetNumber,
                phoneNumber : phoneNumber,
                comments : comments
            }
        });
    }*/

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

