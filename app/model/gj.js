'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const GjSchema = new Schema({
    title: { type: String },
    href: { type: String }
  });
  return mongoose.model('Gj', GjSchema);
};
