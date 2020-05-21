import EventEmitter from 'events'

class SchedulerStore extends EventEmitter{
    _schedulers = [];
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

var Schedulerstore = new SchedulerStore();

export default Schedulerstore;
