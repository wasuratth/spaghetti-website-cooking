import React from 'react';
import logo from '../logo.png';


import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default class LoginPage extends React.Component {
   
    render() {

        const onFinish = (values ) =>  {

        }

        return [
            <div style={{padding:10}}>
                <div style={{ textAlign: 'center' }}>
                    <img src={logo} style={{ maxWidth: 200, margin: 'auto' }} />
                    <div style={{ paddingTop: 20 }}>
                        <h1>เข้าสู่ระบบ</h1>
                        <h3>ยินดีต้อนรับสมาชิก</h3>
                    </div>
                </div>

                <Form
                    name="formLogin"
                     initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="กรุณากรอกอีเมล์"  size="large" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            size="large"

                        />
                    </Form.Item>
                </Form>
                <div style={{textAlign:"center" , marginTop: 10 }}>
                    <Button type="primary" form="formLogin" key="submit" htmlType="submit" size="large" block  >เข้าสู่ระบบ</Button>
                    <div style={{textAlign:"center" , marginTop: 10 }}>
                        <span>คุณเป็นสมาชิกหรือยัง? <a href="#">สมัครสมาชิก</a></span>
                    </div>
                </div>
                
            </div>
        ]
    }
}