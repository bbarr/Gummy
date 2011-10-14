var Gameling = {};

Gameling.Game = function(config) {
  this.pieces = config.pieces || [];
  this.interval = config.interval;
  this.timer = new Gummy.Timer(config.ideal_fps);
}

Gameling.Game.prototype = {
  
  start: function() {
    this.update();
  },
  
  stop: function() {
    
  },
  
  update: function() {
    
    var self = this,
        pieces = this.pieces,
        len = pieces.length;
        
    setInterval(function() {
      var i = 0;
      for (; i < len; i++) {
        pieces[i].update();
      }      
    }, this.interval);
  }
};
