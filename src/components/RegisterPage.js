import React from 'react';
import logo from '../logo.png';


import { useHistory , Redirect } from 'react-router-dom' ; 
import { Form, Input, Button, Checkbox , message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import api from '../api/Api' ; 


export default class RegisterPage extends React.Component {
   
    render() {
         

        const onFinish = async (values ) =>  {
            
        }



        return [
            <div style={{padding:10}}>
                <div style={{ textAlign: 'center' }}>
                    <img src={logo} style={{ maxWidth: 150 , margin: 'auto' }} />
                    <div style={{ paddingTop: 20 }}>
                        <h1>สมัครสมาชิก</h1>
                        <h3>กรุณากรอกข้อมูลของท่าน</h3>
                    </div>
                </div>

                <Form
                    name="formLogin"
                     initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                     <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your Name!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="กรุณากรอกชื่อ"  size="large" />
                    </Form.Item>
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
                    <Form.Item
                        name="confirmpassword"
                        rules={[{ required: true, message: 'Please input your Confirm Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Confirm Password"
                            size="large"

                        />
                    </Form.Item>
                </Form>
                <div style={{textAlign:"center" , marginTop: 10 }}>
                    <Button type="primary" form="formLogin" key="submit" htmlType="submit" size="large" block  >สมัครสมาชิก</Button>
                </div>
                
            </div>
        ]
    }
}