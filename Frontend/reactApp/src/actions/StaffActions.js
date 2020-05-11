import dispatcher from '../PizzaDispatcher'

class StaffActions{
    search(id, firstName){
        dispatcher.handleViewAction({
            actionType : 'STAFF_SEARCH',
            payload : {
                id : id,
                firstName : firstName
            }
        });
    }
    register(id, positionCode, firstName, lastName, email, phoneNumber, password){
        dispatcher.handleViewAction({
            actionType : 'STAFF_REGISTER',
            payload : {
                id : id,
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
    update(id, positionCode, firstName, lastName, email, phoneNumber, password){
        dispatcher.handleViewAction({
            actionType : 'STAFF_UPDATE',
            payload : {
                id : id,
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

export default new StaffActions();
