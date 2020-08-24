import React from 'react';
import logo from '../logo.png';

import { Row, Col, Avatar, List, Upload, Button, message } from 'antd';
import { Link, Redirect } from 'react-router-dom';

import {
    UserOutlined,
    UploadOutlined
} from '@ant-design/icons';



import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import { changeProfilePicture } from '../actions';

import Api from '../api/Api';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            email: null,
            picture: null,
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
            const { name, username, picture } = res.data.data;
            this.setState({ name: name, email: username, picture: picture });
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
        
        const uploadConfig = {
            name: 'picture',
            multiple: false,
            showUploadList: {
                showDownloadIcon: false,
            },
            onRemove: file => {

            },
            action: (process.env.REACT_APP_API_SERVER || "https://spaghetti-api.topwork.asia/api/") + 'profile/picture',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            beforeUpload: file => {
                if (file.type !== 'image/png') {
                    message.error(`${file.name} is not a png file`);
                }
                return file.type === 'image/png';
            },
            onChange: info => {

                if (info.file.status !== 'uploading') {
                    // console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {

                    message.success(`ได้ทำการอัพโหลดรูปแล้ว`);
                    const { response } = info.file;
                    this.props.changeProfilePicture(null) ; 
                    this.setState({ picture: response.data._id });

                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };



        return (
            <div style={{ padding: 10 }}>
                <h1>ข้อมูลส่วนตัว</h1>
                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        {!this.state.picture ? <Avatar style={{ maxWidth: '100%' }} size={120} icon={<UserOutlined />} />
                            : <Avatar style={{ maxWidth: '100%' }} size={120}
                                src={(process.env.REACT_APP_API_SERVER || "https://spaghetti-api.topwork.asia/api/") + 'picture/' + this.state.picture} />
                        }
                        <div style={{ textAlign: 'center', marginTop: 10 }} >
                            <Upload {...uploadConfig} showUploadList={false} >
                                <Button><UploadOutlined /> เลือกภาพประจำตัว</Button>
                            </Upload>
                        </div>
                    </Col>
                </Row>

                <Row style={{ marginTop: 20 }}>
                    <Col span={24} className={["font-kanit"]} style={{ fontSize: 20, textAlign: "left", padding: 10 }}>
                        <div>ชื่อ : {this.state.name}</div>
                        <div>อีเมล์ : {this.state.email || "-"}</div>
                    </Col>
                </Row>
                <h1>แก้ไขเมนูของท่าน ({this.state.menuList.length} เมนู) </h1>
                <Row>
                    <Col span={24}>
                        <List
                            bordered
                            dataSource={this.state.menuList}
                            renderItem={item => {
                                const { _id, title, detail, picture, star } = item;
                                return (
                                    <List.Item>
                                        <Link to={'/menu/edit/' + _id} style={{ display: 'block', width: '100%' }} >
                                            <ListItem {...item} />
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


export default connect(
    null,
    { changeProfilePicture }
)(ProfilePage)