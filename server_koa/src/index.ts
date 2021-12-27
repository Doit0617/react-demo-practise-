import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import loginRouter from './routes/login';
import { cros } from './cros';
const data =
{
    id: 1,
    age: 25,
    address: "北京朝阳"


}
const app = new Koa();
const router = new Router();

app.use(cros);
app.use(bodyParser());

// app.use(loginRouter.routes());

// router.get('/hello', (ctx, next) => {
//     ctx.body = data;
// })
// router.post('/user', async (ctx, next) => {
//     console.log(ctx.request.body);
//     ctx.body = { data: ctx.request.body };
// });
// app.use(loginRouter.allowedMethods());

app.use(loginRouter.routes());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8000, () => {
    console.log('启动服务 port:8000');
});


