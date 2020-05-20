import dispatcher from '../PizzaDispatcher'

class OrderSubmitAction{
    register(firstName, lastName, email, phoneNumber, password){
        dispatcher.handleViewAction({
            actionType : 'STAFF_REGISTER',
            payload : {
                positionCode : positionCode,
                firstName : firstName,
                lastName : lastName,
                email : email,
                phoneNumber : phoneNumber,
                password : password
            }
        });
    }
}

export default new OrderSubmitAction();