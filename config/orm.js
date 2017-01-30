module.exports = {

	var connection = require('./connection');

	selectAll: function(connection, callback) {
		connection.query('SELECT * FROM `burgers`', callback);
	},

	insertOne: function(connection, burger, callback) {
		connection.query('INSERT INTO (burger_name, devoured, date) VALUES (burger, 0, CURRENT_TIMESTAMP)', callback);
	},

	updateOne: function(connection, id, callback) {
		connection.query('UPDATE burgers SET ? WHERE id = ?', [{burger_name: burger}, {devoured: 1}, {date: CURRENT_TIMESTAMP}], callback);
	}



}