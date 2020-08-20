import React from 'react';
import logo from '../logo.png';


import { Link, Redirect } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import api from '../api/Api';


export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { isLogin: false };
    }

    render() {


        const onFinish = async (values) => {
            //localStorage.setItem('token' , 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjI0ZDlmZDNlZjA1MzgyYzAzNjBkZiIsIm5hbWUiOiJXYXN1cmF0IFRoYW1wYW55YSIsImlhdCI6MTU5NjEwMTEzMywiZXhwIjoxNTk2NzA1OTMzfQ.LrKuCBUbvtnNK7vDDsWVl8z1I6S1x4C7SPyzAhroJ3Q' ) ;  
            //window.location.href = '/main' ;

            try {
                const res = await api.post("auth/signin", { ...values });
                const { token } = res.data;
                localStorage.setItem('token', token);
                this.setState({ isLogin: true })
            } catch (error) {
                console.log(error) ; 
                message.error("อีเมล์ หรือ รหัสผ่าน ไม่ถูกต้อง");
                
            }

        }



        return this.state.isLogin ? <Redirect to="/main"></Redirect> : <>
            <div style={{ padding: 10 }}>
                <div style={{ textAlign: 'center' }}>
                    <img src={logo} style={{ maxWidth: 200, margin: 'auto' }} />
                    <div style={{ paddingTop: 20 }}>
                        <h1>เข้าสู่ระบบสมาชิก</h1>
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
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="กรุณากรอกอีเมล์" size="large" />
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
                <div style={{ textAlign: "center", marginTop: 10 }}>
                    <Button type="primary" form="formLogin" key="submit" htmlType="submit" size="large" block  >เข้าสู่ระบบ</Button>
                    <div style={{ textAlign: "center", marginTop: 10 }}>
                        <span>คุณเป็นสมาชิกหรือยัง? <Link to="/register">สมัครสมาชิก</Link></span>
                    </div>
                </div>

            </div>
        </>
    }
}