'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const RoomSchema = new Schema({
    x: { type: Number },
    y: { type: Number },
    owner: { type: String },
    price: { type: Number },
    des: { type: String },
  });
  return mongoose.model('Room', RoomSchema);
};
