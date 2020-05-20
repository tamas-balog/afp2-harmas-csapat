import EventEmitter from 'events'

class CartStore extends EventEmitter{
    _orders = {
        customer: {},
        pizzas: []
    };

    emitChange(){
        this.emit('Change');
    }

    addPizza(pizza){
        this._orders.pizzas.push(pizza);
        this.emitChange();
    }

    addChangeListener(callback){
        this.on('Change', callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change', callback);
    }
}

var Cartstore = new CartStore();

export default Cartstore;
