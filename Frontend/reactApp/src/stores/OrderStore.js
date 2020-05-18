import EventEmitter from 'events'

class OrderStore extends EventEmitter{
    _orders = [];
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

var Orderstore = new OrderStore();

export default Orderstore;
