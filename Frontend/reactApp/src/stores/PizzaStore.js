import EventEmitter from 'events'

class PizzaStore extends EventEmitter{
    _pizzas = [];
    emitChange(){
        this.emit('Change');
    }

    addChangeListener(callback){
        this.on('Change', callback);
    }

    removeChangeListener(callback){
        this.removeChangeListener('Change', callback);
    }
}
var store = new PizzaStore();
export default store;
