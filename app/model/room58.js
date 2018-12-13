'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const Room58Schema = new Schema({
    title: { type: String },
    href: { type: String }
  });
  return mongoose.model('Room58Schema', Room58Schema);
};
