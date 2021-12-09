import React, { useState } from "react";
import { Menu } from 'antd';
import { DashboardOutlined, ScheduleOutlined, TeamOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";
import { loadavg } from "os";
import Path from "../routes/routePath";
import MenuItem from "antd/lib/menu/MenuItem";
const { SubMenu } = Menu;

export function Sider() {
    const location = useLocation();
    const [openKey, setOpenKey] = useState(['admin']);
    console.log(openKey);
    return (
        <>
            <Menu mode='inline' openKeys={openKey} selectedKeys={[location.pathname]} onOpenChange={
                (e) => { setOpenKey(e);}
            } >

                <SubMenu key={MenuOpenKey.admin} title={
                    <span>
                        <DashboardOutlined />
                        <span>管理面板</span>
                    </span>}>
                    <Menu.Item key={Path.dashboard}>
                        <Link to={Path.dashboard} >我的主页</Link>
                    </Menu.Item>

                </SubMenu>

                <SubMenu key={MenuOpenKey.process} title={
                    <span>
                        <ScheduleOutlined />
                        <span>课程管理</span>
                    </span>} >
                    <Menu.Item key={Path.projectList}>
                        <Link to={Path.projectList}>课题列表</Link>
                    </Menu.Item>
                    <Menu.Item key={Path.myproject}>
                        <Link to={Path.myproject}>我的课程</Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key={MenuOpenKey.personal} title={
                    <span>
                        <ProfileOutlined />
                        <span>个人信息</span>
                    </span>}>
                    <Menu.Item key='info1'>
                        修改信息
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </>
    );

}

enum MenuOpenKey {
    admin = "admin",
    process = "process",
    personal = 'personal',
}
