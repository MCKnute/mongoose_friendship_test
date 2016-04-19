var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() {
  return {
    showAll: function(req, res) {
      Friend.find({}, function(err, results){
      	if(err) {
      		console.log(err);
      	} else {
      		res.json(results);
      	}
      });
    },

    createFriend: function(req, res) {
      Friend.create(req.body, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    }
  };
})();