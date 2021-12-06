import { Button, Checkbox, Col, Form, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import 'antd/dist/antd.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
interface IModal {
    isVisible: boolean;
    hidden: Function;
    loginOK: Function;
}
export function LoginModal(modalData: IModal) {
    const [m_modalData, setModalData] = useState(modalData);
    const onFinish = (values: any) => { m_modalData.loginOK(values); }
    return (
        <>
            <Modal title="Login"
                visible={modalData.isVisible}
                okText="Comfirm"
                onCancel={()=>{m_modalData.hidden();}}
                footer=""
            >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    className={"login-form"}
                    onFinish={onFinish}
                >
                    <Form.Item label='' name="username" rules={[{ required: true, message: 'Please input your username' }]}>
                        <Input placeholder="Username" prefix={<LockOutlined />} />
                    </Form.Item>
                  
                    <Form.Item label='' name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password placeholder='Password' prefix={<UserOutlined />} />
                    </Form.Item>
                  
                    <Form.Item label='' name='checkbox' valuePropName='checked' wrapperCol={{ offset: 4, span: 8 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  
                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button block={true} loading={false} type='primary' htmlType='submit' className='login-form-button'>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}