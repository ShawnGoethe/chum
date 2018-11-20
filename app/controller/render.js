exports.ejs = async ctx => {
    await ctx.render('hello.ejs', {
      data: 'world',
    });
  };