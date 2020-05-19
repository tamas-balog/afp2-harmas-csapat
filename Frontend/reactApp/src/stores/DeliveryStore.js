import EventEmitter from 'events'

class DeliveryStore extends EventEmitter{
    _deliveries = [];
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

var Deliverystore = new DeliveryStore();

export default Deliverystore;
