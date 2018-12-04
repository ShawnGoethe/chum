'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const rooms = await this.ctx.model.Room.find({});
    await this.ctx.render('map.ejs', {
      rooms,
    });
  }
}

module.exports = HomeController;
