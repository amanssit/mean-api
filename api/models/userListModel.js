'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  fname: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  lname: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  username: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('User', UserSchema);