/*
    路由管理
*/

import { type } from "os";
import { projectData } from "../common/fakeData";
import { DashBoard } from "../components/dashBoard";
import { ProjectList } from "../components/projectTable";
import { TableTest } from "../components/test";


interface IRoute {
    path: string | routePath;
    component: JSX.Element | any;
}
type routePath = '/' | '/dashboard' | '/projectList'
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
        }
    ]

export function GetComponent(params: routePath | string) {
    switch (params) {
        case '/':
        case '/dashboard':
            return <DashBoard />
        case '/projectList':
            return <ProjectList />
    }
    return <DashBoard />;
}


