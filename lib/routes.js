module.exports = function(app) {
    const router = require('koa-router')();

    // route definitions
    router.get('/', index);

    async function index(ctx) {
        const users = [{ name: 'Dead Horse' }, { name: 'Jack' }, { name: 'Tom' }];

        console.log(users);
        await ctx.render('index', {
            users
        });
    };

    app.use(router.middleware());
    // app.use(router.routes());
};
