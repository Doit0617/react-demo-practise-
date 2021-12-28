import React from "react";
import { Layout, } from 'antd';
import { LoginComponent } from "./login";
import { Col } from "antd";
import img from '../img/symbol.png';
const { Header, Content } = Layout;
export function LoginLayout() {
    return <div>
        <Layout>
            <Header className="light">{<Title />}</Header>
        </Layout>
        <LoginComponent />
    </div>
}

export function Title() {
    return <>
        <Col span={12}>
            <img src={img} alt="sjtu" style={{ height: "64px", marginLeft: "0px" }} />
        </Col>
    </>
}
