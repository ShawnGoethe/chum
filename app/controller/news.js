'use strict';

const Controller = require('egg').Controller;
var cheerio = require('cheerio');
var request = require('request');

class NewsController extends Controller {
    async index() {
        const news = await this.ctx.model.News.find({});
        request.get('https://cnodejs.org/',function(err,res,sres){
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            const tmp = $('#topic_list .topic_title');
            tmp.each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });

            res.send(items);
        })
    }
}
module.exports = NewsController;
