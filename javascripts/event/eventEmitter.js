var events = require('events');
var util = require('util');

function eventEmitter() {
    events.EventEmitter.call(this);
}

util.inherits(eventEmitter, events.EventEmitter);

eventEmitter.prototype.start = function() {
    var self = this;
    this.id = setInterval(function() {
        self.emit('pulse', {msisdn:0987938491,params:0, status : 1});
    }, 1000);
};

module.exports = eventEmitter;