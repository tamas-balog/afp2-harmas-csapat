import EventEmitter from 'events'

class StaffStore extends EventEmitter{
    _staff = [];
    emitChange(){
        this.emit('Change');
    }

    addChangeListener(callback){
        this.on('Change', callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change', callback);
    }
}

var Staffstore = new StaffStore();

export default Staffstore;
