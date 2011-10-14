var Gummy = {};

Gummy.Constructor = (function() {
  
  var extend = function(to, from) {
    for (var key in from) {
      if (from.hasOwnProperty(key) && typeof from[key] === 'function') {
        to[key] = from[key];
      }
    }
  };
  
  var BaseConstructor = function() {};
  
  BaseConstructor.create = function(user_constructor, user_prototype) {

    var self = this,
        NewConstructor,
        prototype = {};

    user_constructor || (user_constructor = function() {}),
    user_prototype || (user_prototype = {});

    NewConstructor = function() {
      self.apply(this, arguments);
      user_constructor.apply(this, arguments);
    };

    NewConstructor.prototype = prototype;

    extend(NewConstructor, this);
    extend(prototype, this.prototype);
    extend(prototype, user_prototype);

    return NewConstructor;
  }
  
  return BaseConstructor;
})();

Gummy.Game = Gummy.Constructor.create(function() {
  this.pieces = config.pieces || [];
  this.interval = config.interval;
}, {
  
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
});

Gummy.Piece = Gummy.Constructor.create(function() {
  this.uid = Gameling.Piece.uid();
}, {
  update: function() {
     console.log('updating', this.uid);
   }
});

Gameling.Piece.pieces = [];

Gameling.Piece.uid = (function() {
  var uid = 0;
  return function() {
    return uid++;
  }
})();

