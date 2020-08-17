import React from 'react';
import logo from '../logo.png';

import { Row, Col, Avatar , Form , Input } from 'antd';
 
import {
    UserOutlined,
    MailOutlined 
} from '@ant-design/icons';
import Api from '../api/Api';

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : null , 
            email : null 
        }

    }

    async componentDidMount() {
        try{
            const res = await Api.get('profile/me') ;
            const {name  , username } = res.data.data ; 
            this.setState({ name : name , email : username }) ; 
        }catch(error){
            console.log(error)
         }

    }



    render() {


        return (
            <div style={{ padding: 10 }}>
                <h1>ข้อมูลส่วนตัว</h1>
                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Avatar style={{ maxWidth: '100%' }} size={160} icon={<UserOutlined />} />
                    </Col>
                </Row>

                <Row style={{marginTop:20 }}>
                    <Col span={24} className={["font-kanit"]} style={{fontSize : 24 , textAlign :"left" , padding : 10 }}>
                        <div>ชื่อ : {this.state.name}</div>
                        <div>อีเมล์ : {this.state.email || "-"  }</div>
                    </Col>
                </Row>
            </div>
        )
    }
}