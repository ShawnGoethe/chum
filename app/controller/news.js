'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async newsGet() {
        const news = await this.ctx.model.News.find({}).limit(100);
        this.ctx.body = news;
    }
}
module.exports = NewsController;
