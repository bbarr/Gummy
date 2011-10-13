var Gummy = {
  
  // Game constructor
  Game: null,
  
  // Piece constructor
  Piece: null,
  
  // General helper classes/methods
  Util: {},
  
  // Classes and Objects to augment Game and Piece objects
  Mixins: {}
  
};

Gummy.Game = function() {
  
};

Gummy.Game.prototype = {
  
};

Gummy.Piece = function() {
  
};

Gummy.Piece.prototype = {
  
};

Gummy.Mixins.Vector = function() {
  
};

Gummy.Mixins.Vector.prototype = {
  
  add: function(vector) {
    
  },
  
  subtract: function(vector) {
    
  },
  
  dot: function(vector) {
    
  },
  
  compare: function(vector) {
    
  },
  
  get_length: function() {
    
  }
};

Gummy.Util.Timer = function(ideal_fps) {
  
  this.ideal_fps = ideal_fps;
  
  // aggregations, should not be reset
  this.count = 0;
  this.total_coeffecient = 0;
  this.total_fps = 0;
  
  this.paused = true;
  this.reset();
}

Gummy.Util.Timer.prototype = {
  
  pause: function() {
    this.paused = true;
  },
  
  reset: function() {
    this.fps = 0;
    this.average_fps = 0;
    this.coeffecient = 0;
    this.average_coeffecient = 0;
    this.last_time = new Date().getTime();
  },
  
  split: function() {
    
    if (this.paused) {
      this.reset();
      this.paused = false;
      return;
    }
    
    var current_time = new Date().getTime(),
        elapsed = current_time - this.last_time,
        fps = 1000 / elapsed,
        coeffecient = this.ideal_fps / fps;

    this.last_time = current_time;
    this.count++;
    this.total_fps += this.fps = fps;    
    this.total_coeffecient += this.coeffecient = coeffecient;
    this.elapsed = elapsed;
  }
}
