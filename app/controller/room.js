'use strict';

const Controller = require('egg').Controller;

class RoomController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.model.Room.find({});
  }
  async roomTest() {
    const RoomModel = this.ctx.model.Room;
    const newRoom = new RoomModel({
      x: 120.0,
      y: 120.0,
      owner: 'zhang',
      price: 1000,
      des: 'nice'
    })
    newRoom.save(err => {
      if (err) {

      }
    })
  }
  async roomAdd() {
    const { x, y, owner, price, des } = this.ctx.query;
    if (x && y && owner && price && des) {
      const RoomModel = this.ctx.model.Room;
      const newRoom = new RoomModel({
        x: x,
        y: y,
        owner: owner,
        price: price,
        des: des
      });
      newRoom.save(err => {
        if (err) {
          this.ctx.body = err;
        }
      });
      this.ctx.body = 'ok';
    }else{
      this.ctx.body = 'false';
    }



  }
}
module.exports = RoomController;
