'use strict';

const Controller = require('egg').Controller;

class RoomController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.model.Room.find({});
  }
  async roomAdd(){
    const RoomModel = this.ctx.model.Room;
    const newRoom = new RoomModel({
        x:120,
        y:120,
        owner:'zhang',
        price:1000,
        des:'nice'
    })
    newRoom.save(err=>{
        if(err){
            
        }
    })
  }
}
module.exports = RoomController;
