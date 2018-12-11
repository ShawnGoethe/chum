'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const NewsSchema = new Schema({
    title: { type: String },
    herf: { type: String }
  });
  return mongoose.model('News', NewsSchema);
};
