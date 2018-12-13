const Subscription = require('egg').Subscription;
var cheerio = require('cheerio');
var request = require('request');

class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '10000000000', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }

  async subscribe() {
    const ctx = this.ctx;
    request.get('https://cnodejs.org/',function(err,res,sres){
        if (err) {
            return next(err);
        }
        var $ = cheerio.load(sres);
        var items = [];
        const tmp = $('#topic_list .topic_title');
        tmp.each(function (idx, element) {
            var $element = $(element);
            items.push({
                title: $element.attr('title'),
                href: $element.attr('href')
            });
        });
        const NewsModel = ctx.model.News;
        NewsModel.insertMany(items,function(err){
            if(err){
                ctx.body = err;
            }else{
                ctx.body = {
                    resultCode: 200
                  }
            }
        })

    })
  }
}

module.exports = UpdateCache;