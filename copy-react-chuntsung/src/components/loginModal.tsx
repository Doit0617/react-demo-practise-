import { Button, Checkbox, Col, Form, Input, message, Modal, Row } from "antd";
import React, { useRef, useState } from "react";
import 'antd/dist/antd.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Login, Register } from "../axios/axiosLogin";
import { ILoginInfo } from "../net/netInterfaceConfig";

interface IModal {
    isVisible: boolean;
    hidden: Function;
    loginOK: Function;

}
//登录组件
export function LoginModal(modalData: IModal) {
    const [m_modalData, setModalData] = useState(modalData);
    const [isLoading, setLoading] = useState(false);
    let username = '';
    let userpwd = '';
    const usernameRef = useRef<Input>(null);
    const userpwdRef = useRef<Input>(null);
    let loginState = false;

    const onFinish = async (values: any) => {
        await onClickLogin();
        if (loginState) {
            m_modalData.loginOK(values);
        }
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
    return (
        <>
            <Modal title="Login"
                visible={modalData.isVisible}
                okText="Comfirm"
                onCancel={() => { m_modalData.hidden(); }}
                footer=""
            >
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

                    <Form.Item label='' name='checkbox' valuePropName='checked' wrapperCol={{ offset: 4, span: 8 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button block={true} loading={isLoading} type='primary' htmlType='submit' className='login-form-button'>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}