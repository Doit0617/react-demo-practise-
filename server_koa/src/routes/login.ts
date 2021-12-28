import Router from "koa-router";
// import multer from 'koa-multer';
import { query } from "../common/mysql";
import { ILoginInfo, INetData } from "../net/netInterfaceConfig";
const router = new Router();
router.post('/register', async (ctx, next) => {
    let userName = ctx.request.body.userName;
    let userPwd = ctx.request.body.userPwd;
    console.log(userName + ":" + userPwd);
    let ans = await RegisterUesr(userName, userPwd);
    ctx.body = ans;

});

router.post('/login', async (ctx, next) => {
    let userName = ctx.request.body.username;
    let userPwd = ctx.request.body.userpwd;
    let ans = await Login(userName, userPwd);
    let m_code = Object.keys(ans).length === 0 ? -1 : 0;
    let res: INetData<ILoginInfo> =
    {
        code: m_code,
        data: ans,
    }
    ctx.body = res;
});
router.get('/test', async (ctx, next) => {
    let ans = await Login('1', '123');
    let m_code = Object.keys(ans).length === 0 ? -1 : 0;
    let res: INetData<ILoginInfo> =
    {
        code: m_code,
        data: ans,
    }
    ctx.body = res;
});

async function RegisterUesr(userName: string, userPwd: string) {

    let sql = "INSERT INTO users(username,passsword) values(?,?)";
    let params = [userName, userPwd];
    const a = await query(sql, params);
    return a;

}

async function Login(userName: string, userPwd: string) {
    let sql = 'SELECT * FROM users WHERE username= ? and password= ?';
    let params = [userName, userPwd];
    const ans = await query<ILoginInfo>(sql, params);
    return ans;
}

export default router;