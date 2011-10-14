Gameling.Piece = Constructor.create(function() {
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