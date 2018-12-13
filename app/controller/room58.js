'use strict';

const Controller = require('egg').Controller;

class GjController extends Controller {
    async room58() {
        const gj = await this.ctx.model.Gj.find({});
        this.ctx.body = gj;
    }
}
module.exports = GjController;
