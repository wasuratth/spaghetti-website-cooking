import React from 'react';
import logo from '../logo.png';

import { Row, Col, Avatar, List, Input } from 'antd';
import { Link, Redirect } from 'react-router-dom';

import {
    UserOutlined,
    MailOutlined
} from '@ant-design/icons';

import ListItem from '../components/ListItem';

import Api from '../api/Api';

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            email: null,
            menuList: []
        }

    }

    async componentDidMount() {
        this.getProfile();
        this.getMenuUser();
    }

    getProfile = async () => {
        try {
            const res = await Api.get('profile/me');
            const { name, username } = res.data.data;
            this.setState({ name: name, email: username });
        } catch (error) {
            console.log(error)
        }
    }


    getMenuUser = async () => {
        try {
            const res = await Api.get('menu/user');
            this.setState({ menuList: res.data.data });
        } catch (error) {
            console.log(error)
        }
    }

    render() {


        return (
            <div style={{ padding: 10 }}>
                <h1>ข้อมูลส่วนตัว</h1>
                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Avatar style={{ maxWidth: '100%' }} size={120} icon={<UserOutlined />} />
                        
                        
                    </Col>
                </Row>

                <Row style={{ marginTop: 20 }}>
                    <Col span={24} className={["font-kanit"]} style={{ fontSize: 20, textAlign: "left", padding: 10 }}>
                        <div>ชื่อ : {this.state.name}</div>
                        <div>อีเมล์ : {this.state.email || "-"}</div>
                    </Col>
                </Row>
                <h1>แก้ไขเมนูของท่าน ({this.state.menuList.length } เมนู) </h1>
                <Row>
                    <Col span={24}>
                        <List
                            bordered
                            dataSource={this.state.menuList}
                            renderItem={item => {
                                const { _id, title, detail, picture, star } = item ;
                                return (
                                    <List.Item>
                                        <Link to={'/menu/edit/' + _id} style={{ display: 'block' , width : '100%' }} >
                                            <ListItem {...item } />
                                        </Link>
                                    </List.Item>
                                )
                            }

                            }
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}