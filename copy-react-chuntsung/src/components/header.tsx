import React, { useState } from "react";
import { Button, Row, Col, Space, Dropdown, Menu, message } from 'antd';
import img from '../img/symbol.png';
import 'antd/dist/antd.css';
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";
import { LoginModal } from "./loginModal";
import Path from "../routes/routePath";
import { Link } from "react-router-dom";

interface ILogin {
    isVisible: boolean;
    isLogin: boolean;
    userName: string;
}



// 头文件
export function Header(data: ILogin) {
    const [loginData, SetLoginData] = useState(data);
    const menu = (
        <Menu>
            <Menu.Item key="exit" icon={<LogoutOutlined />} onClick={() => {
                message.info("退出登录")
                let newData = { ...loginData };
                newData.isLogin = false;
                newData.isVisible = false;
                newData.userName = "";
                SetLoginData(newData);
            }}>
                退出登录1
            </Menu.Item>
        </Menu>
    );
    // 登录
    const login = function Login() {
        const handleLogin = () => {
            let newData = { ...loginData };
            newData.isVisible = true;
            SetLoginData(newData);
        }
        const handleReister = () => {
            console.log("asdfewrwerew");

        }
        return (
            <>
                <Col span={3} offset={9}>
                    <Row align={'middle'}>
                        <Space>
                            <Button type={'primary'} onClick={handleLogin}>登录</Button>
                            <Button type={'primary'} onClick={handleReister}>
                                <Link to={Path.register}>注册</Link>
                            </Button>
                        </Space>
                    </Row>
                </Col>
            </>
        );
    }
    //登出
    const loginOut = function LoginOut() {
        return (
            <Col span={4} offset={3}>
                <Dropdown overlay={menu}>
                    <Button type={"link"} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        {loginData.userName} <DownOutlined />
                    </Button>
                </Dropdown>
            </Col>
        );
    }

    const hide = () => {
        let newData = { ...loginData };
        newData.isVisible = false;
        SetLoginData(newData);
    }
    const loginOK = (valuse: any) => {
        let newData = { ...loginData };
        newData.isLogin = true;
        newData.userName = valuse['username']
        SetLoginData(newData);
    }
    return (
        <div>
            {loginData.isLogin}
            <Row justify={'space-between'} align={'middle'}>
                <Col span={12}>
                    <img src={img} alt="sjtu" style={{ height: "64px", marginLeft: "0px" }} />
                </Col>
                {loginData.isLogin ? loginOut() : login()}
                <LoginModal hidden={hide} isVisible={loginData.isVisible} loginOK={loginOK} />
            </Row>
        </div>
    );
}




