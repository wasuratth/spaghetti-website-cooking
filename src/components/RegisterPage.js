import React from 'react';
import logo from '../logo.png';


import { useHistory , Redirect } from 'react-router-dom' ; 
import { Form, Input, Button, Checkbox , message } from 'antd';
import { UserOutlined, LockOutlined , MailOutlined } from '@ant-design/icons';
import api from '../api/Api' ; 


export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { isRegisted : false };
    }

    render() {
         

        const onFinish = async (values ) =>  {
            try {
                const res = await api.post("auth/signup", { ...values });
                this.setState({ isRegisted: true }) ; 
                message.info("ได้ทำการสมัครสมาชิกแล้ว");
            } catch (error) {
                message.error("ไม่สามารถสมัครสมาชิกได้");
            }

        }



        return this.state.isRegisted ? <Redirect to="login" />: <>
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
                        rules={[{ required: true, message: 'กรุณากรอก ชื่อ-สกุล ผู้ใช้งาน' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="ชื่อ-สกุล"  size="large" />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, message: 'กรุณากรอก อีเมล์' } , 
                            {  type: 'email', message: 'รูปแบบอีเมล์ไม่ถูกต้อง', } 
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="อีเมล์"  size="large" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'กรุณากรอก รหัสผ่าน' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="รหัสผ่าน"
                            size="large"

                        />
                    </Form.Item> 
                    <Form.Item
                        name="confirmpassword"
                        rules={[{ required: true, message: 'กรุณากรอก ยืนยันรหัสผ่าน' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="ยืนยันรหัสผ่าน"
                            size="large"

                        />
                    </Form.Item>
                </Form>
                <div style={{textAlign:"center" , marginTop: 10 }}>
                    <Button type="primary" form="formLogin" key="submit" htmlType="submit" size="large" block  >สมัครสมาชิก</Button>
                </div>
                
            </div>
        </>
    }
}