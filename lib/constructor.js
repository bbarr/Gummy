var Constructor = (function() {
  
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