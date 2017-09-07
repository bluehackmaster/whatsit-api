var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Object = require('./object')

var imageSchema = new Schema({
  name: String,
  uri: String,
  labels: [String],
  objects: [Object],
  segmented: Number,
  checkedCount: Number
});

module.exports = imageSchema
