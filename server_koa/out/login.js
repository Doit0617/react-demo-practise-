"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_router_1 = __importDefault(require("koa-router"));
var router = new koa_router_1.default();
router.get('/login', function (ctx, next) {
    ctx.body = "hello word tian tong1111";
});
exports.default = router;
