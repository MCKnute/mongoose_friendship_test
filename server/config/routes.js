var friends = require('../controllers/friends.js');

module.exports = function(app) {
	app.get('/friends', function(req, res) {
	  friends.showAll(req, res);
	});

	app.post('/friends', function(req, res){
    	friends.createFriend(req, res);
    });

    app.post('/friends/:id/delete', function(req, res){
    	friends.deleteFriend(req, res);
    });

	
};