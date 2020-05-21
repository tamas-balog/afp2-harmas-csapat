import dispatcher from '../PizzaDispatcher'

class StaffActions{
    search(firstName, lastName){
        dispatcher.handleViewAction({
            actionType : 'STAFF_SEARCH',
            payload : {
                firstName : firstName,
                lastName : lastName
            }
        });
    }
    register(positionCode, firstName, lastName, email, phoneNumber, password){
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
    delete(id){
        dispatcher.handleViewAction({
            actionType : 'STAFF_DELETE',
            payload : {
                id : id
            }
        });
    }
}

export default new StaffActions();
