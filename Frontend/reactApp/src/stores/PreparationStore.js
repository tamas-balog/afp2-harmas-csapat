import EventEmitter from 'events'

class PreparationStore extends EventEmitter{
    _preparations = [];
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

var Preparationstore = new PreparationStore();

export default Preparationstore;
