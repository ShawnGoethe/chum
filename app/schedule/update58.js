const Subscription = require('egg').Subscription;
var cheerio = require('cheerio');
var request = require('request');

class UpdateCache extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            interval: '1000',
            type: 'all', // 指定所有的 worker 都需要执行
        };
    }

    async subscribe() {
        const ctx = this.ctx;
        request.get('https://bj.58.com/chuzu/?PGTID=0d100000-0000-1ec7-d30f-876121618b60&ClickID=3', function (err, res, sres) {
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres);
            var items = [];
            const tmp = $('.listUl .strongbox');
            //console.log(tmp);
            tmp.each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.text().trim(),
                    href: $element.attr('href')//.replace(/[\r\n]/g,"")
                });
            });
            const Room58Model = ctx.model.Room58;
            Room58Model.insertMany(items, function (err) {
                if (err) {
                    ctx.body = err;
                } else {
                    ctx.body = {
                        resultCode: 200
                    }
                }
            })

        })
    }
}

module.exports = UpdateCache;