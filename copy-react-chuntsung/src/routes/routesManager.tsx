/*
    路由管理
*/

import { DashBoard } from "../components/dashBoard";
import { MyProject, MyProject1 } from "../components/myproject";
import { ProjectList } from "../components/projectTable";


interface IRoute {
    path: string | routePath;
    component: JSX.Element | any;
}
type routePath = '/' | '/dashboard' | '/projectList' | '/myproject'
export const routes: IRoute[] =
    [
        {
            path: '/',
            component: GetComponent('/')
        },
        {
            path: '/dashboard',
            component: GetComponent('/dashboard')
        },
        {
            path: '/projectList',
            component: GetComponent('/projectList'),
        },
        {
            path: '/myproject',
            component: GetComponent('/myproject'),
        }
    ]

export function GetComponent(params: routePath | string) {
    switch (params) {
        case '/':
        case '/dashboard':
            return <DashBoard />
        case '/projectList':
            return <ProjectList />
        case '/myproject':
            return <MyProject />
        // return <MyProject1 />
    }
    return <DashBoard />;
}


