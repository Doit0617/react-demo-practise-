"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_router_1 = __importDefault(require("koa-router"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
var login_1 = __importDefault(require("./routes/login"));
var cros_1 = require("./cros");
var data = {
    id: 1,
    age: 25,
    address: "北京朝阳"
};
var app = new koa_1.default();
var router = new koa_router_1.default();
app.use(cros_1.cros);
app.use((0, koa_bodyparser_1.default)());
// app.use(loginRouter.routes());
// router.get('/hello', (ctx, next) => {
//     ctx.body = data;
// })
// router.post('/user', async (ctx, next) => {
//     console.log(ctx.request.body);
//     ctx.body = { data: ctx.request.body };
// });
// app.use(loginRouter.allowedMethods());
app.use(login_1.default.routes());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8000, function () {
    console.log('启动服务 port:8000');
});
