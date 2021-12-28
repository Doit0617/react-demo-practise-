import { Button, Checkbox, Col, Form, Input, message, Modal, Row, Layout } from "antd";
import React, { useRef, useState } from "react";
import 'antd/dist/antd.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Login, Register } from "../axios/axiosLogin";
import { ILoginInfo } from "../net/netInterfaceConfig";
import { Link } from "react-router-dom";
import Path from "../routes/routePath";


//登录组件
export function LoginComponent() {

    const [isLoading, setLoading] = useState(false);
    let username = '';
    let userpwd = '';
    const usernameRef = useRef<Input>(null);
    const userpwdRef = useRef<Input>(null);
    let loginState = false;
    const onFinish = async (values: any) => {

    }
    const onClickLogin = async () => {
        setLoading(true);
        if (usernameRef.current) {
            username = usernameRef.current.input.value;
        }
        if (userpwdRef.current) {
            userpwd = userpwdRef.current.input.value;
        }
        let ans = await Login<ILoginInfo>(username, userpwd);
        if (ans.code == 0 && Object.keys(ans.data).length !== 0) {
            message.info("登录成功");
            loginState = true;
        } else {
            message.info('账号/密码错误');
            loginState = false;
        }
        setLoading(false);
    }
    const tailLayout = {
        wrapperCol: { offset: 0, span: 16 },
    };
    return (
        <>
            <Row align={'middle'} style={{ marginTop: "200px" }}>
                <Col span={4} offset={10}>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        className={"login-form"}
                        onFinish={onFinish}
                    >
                        <Form.Item label='' name="username" rules={[{ required: true, message: 'Please input your username' }]}>
                            <Input ref={usernameRef} placeholder="Username" prefix={<LockOutlined />} />
                        </Form.Item>

                        <Form.Item label='' name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password ref={userpwdRef} placeholder='Password' prefix={<UserOutlined />} />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name='remember' valuePropName="checked" noStyle >
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                            <Button type='link' style={{ float: 'right' }}>
                                <Link to={Path.register}>注册</Link>
                            </Button>
                        </Form.Item>

                        <Form.Item style={{ textAlign: 'center' }}>
                            <Button block={true} loading={isLoading} type='primary' htmlType='submit' className='login-form-button'>
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
}