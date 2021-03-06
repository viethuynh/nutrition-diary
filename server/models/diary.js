var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nutrition');
var Schema = mongoose.Schema;

var diarySchema = new Schema({
  user_id:{type: Schema.ObjectId, ref: 'user'},
  diary_note: String,
  consumed_at: Date,
  total_fat: Number,
  total_cholesterol: Number,
  total_carbohydrate: Number,
  total_calories: Number,
  total_protein: Number,
  foods: []
});

var diaryModels = mongoose.model('diary', diarySchema);

module.exports = diaryModels
