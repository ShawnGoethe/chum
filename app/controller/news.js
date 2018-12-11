'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async newsGet() {
        const news = await this.ctx.model.News.find({});
        this.ctx.body = news;
    }
}
module.exports = NewsController;
