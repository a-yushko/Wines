
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var WinesSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Wines', WinesSchema);

//var initial = "{Wines}"
//var Wines = {}