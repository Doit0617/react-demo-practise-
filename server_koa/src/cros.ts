import { Context } from 'koa'

/** 跨域处理 */
export async function cros(ctx: Context, next: () => Promise<any>) {
    ctx.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE')
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Authorization')
    ctx.set('Access-Control-Allow-Credentials', 'true')
    // ctx.set('Access-Control-Allow-Origin', '*') // 带认证信息的头不允许设置为*
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    // ctx.set('Access-Control-Expose-Headers', 'CustomHeader')
    if (ctx.req.method === 'OPTIONS') {
        ctx.body = '' as any
        return
    }
    await next()
}
