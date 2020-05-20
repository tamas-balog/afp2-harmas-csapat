import EventEmitter from 'events'

class PizzaStore extends EventEmitter{
    _pizzas = [];
    _pizzaToCart = [];
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
var Pizzastore = new PizzaStore();
export default Pizzastore;
