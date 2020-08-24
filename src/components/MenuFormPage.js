import React from 'react';
import { Button, Row, Col, Form, Input, Select, message, Upload , Modal } from 'antd';
import {
    MinusCircleOutlined,
    PlusOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from "react-router";

import Api from '../api/Api';

class MenuFormPage extends React.Component {

    formRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            isSubmit: false,
            visibleDeleteModal: false,
            menu: { _id: null, title: '', detail: '', picture: null },
        };
    }

    async componentDidMount() {
        this.getMenu();
    }

    getMenu = async () => {

        try {

            const id = this.props.match.params.id;
            const res = await Api.get('menu/' + id);

            this.setState({ menu: res.data.data });

            const { title, detail, group, picture, step, ingredients } = this.state.menu;


            this.formRef.current.setFieldsValue({
                title: title,
                detail: detail,
                step: step,
                group: group,
                ingredients: ingredients,
                picture: picture,
            });


        } catch (error) {
            console.log(error)
        }
    }

    render() {

        const onFinish = async (values) => {

            try {
                const res = await Api.post('menu', { ...values, picture: this.state.menu.picture, id: this.state.menu._id });
                message.info("ได้ทำการบันทึกข้อูลแล้ว")
                this.setState({ isSubmit: true });
            } catch (error) {
                console.log(error)
            }
        }

        const uploadConfig = {
            name: 'picture',
            multiple: false,
            showUploadList: {
                showDownloadIcon: false,
            },
            onRemove: file => {

            },
            action: (process.env.REACT_APP_API_SERVER || "https://spaghetti-api.topwork.asia/api/") + 'picture',
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

                    const menu = { ... this.state.menu, picture: response.data._id };
                    this.setState({ menu: menu });

                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };



        return (
            this.state.isSubmit ?
                <Redirect to={this.props.returnUrl }></Redirect> :
                <div style={{ padding: 10 }}>
                    {!this.state.menu._id ? <h1>เพิ่มเมนู</h1> : <h1>แกัไขเมนู</h1>}
                    <Form layout="vertical" name="formMenu" onFinish={onFinish} ref={this.formRef} >
                        <Form.Item label="ชื่อเมนู" name="title"  >
                            <Input placeholder="" value={this.state.menu.title} />
                        </Form.Item>
                        <Form.Item label="รายละเอียดเมนู" name="detail" >
                            <Input.TextArea rows="3" defaultValue={this.state.menu.detail} />
                        </Form.Item>
                        <Form.Item label="ประเภทอาหาร" name="group" >
                            <Select rules={{ required: true }} >
                                <Select.Option value="c1">เมนูง่ายๆ</Select.Option>
                                <Select.Option value="c2">เมนูเส้น</Select.Option>
                                <Select.Option value="c3">เมนูเนื้อสัตว์</Select.Option>
                                <Select.Option value="c4">เมนูจานเดียว</Select.Option>
                                <Select.Option value="c5">เมนูเพื่อสุขภาพ</Select.Option>
                                <Select.Option value="c6">เมนูสลัด</Select.Option>
                                <Select.Option value="c7">เมนูผลไม้</Select.Option>
                                <Select.Option value="c8">เมนูของหวาน</Select.Option>
                                <Select.Option value="c9">เมนูเครื่องดื่ม</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.List name="ingredients" label="วัตถุดิบ" >
                            {(ingredients, { add, remove }) => {
                                return (
                                    <div>
                                        {ingredients.map((field, index) => (
                                            <Form.Item
                                                label={index === 0 ? 'วัตถุดิบ' : ''}
                                                required={false}
                                                key={field.key}
                                            >
                                                <Form.Item
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[{
                                                        required: true,
                                                        whitespace: true,
                                                        message: "กรุณากรอกวัตถุดิบอาหาร",
                                                    },
                                                    ]}
                                                    noStyle
                                                >
                                                    <Input placeholder="วัตถุดิบอาหาร" style={{ width: '85%' }} />
                                                </Form.Item>
                                                {ingredients.length > 1 ? (
                                                    <MinusCircleOutlined
                                                        className="dynamic-delete-button"
                                                        style={{ margin: '0 8px' }}
                                                        onClick={() => {
                                                            remove(field.name);
                                                        }}
                                                    />
                                                ) : null}
                                            </Form.Item>
                                        ))}
                                        <Form.Item style={{ textAlign: "center" }}>
                                            <Button type="dashed" onClick={() => { add(); }} style={{ width: '60%' }}>
                                                <PlusOutlined /> เพิ่มวัตถุดิบ </Button>
                                        </Form.Item>
                                    </div>
                                );
                            }}
                        </Form.List>

                        <Form.List name="step" label="ขั้นตอน" >
                            {(steps, { add, remove }) => {
                                return (
                                    <div>
                                        {steps.map((field, index) => (
                                            <Form.Item
                                                label={index === 0 ? 'ขั้นตอน' : ''}
                                                required={false}
                                                key={field.key}
                                            >
                                                <Form.Item
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[{
                                                        required: true,
                                                        whitespace: true,
                                                        message: "กรุณากรอกขั้นตอนการทำอาหาร",
                                                    },
                                                    ]}
                                                    noStyle
                                                >
                                                    <Input placeholder="ขั้นตอน" style={{ width: '85%' }} />
                                                </Form.Item>
                                                {steps.length > 1 ? (
                                                    <MinusCircleOutlined
                                                        className="dynamic-delete-button"
                                                        style={{ margin: '0 8px' }}
                                                        onClick={() => {
                                                            remove(field.name);
                                                        }}
                                                    />
                                                ) : null}
                                            </Form.Item>
                                        ))}
                                        <Form.Item style={{ textAlign: "center" }}>
                                            <Button type="dashed" onClick={() => { add(); }} style={{ width: '60%' }}>
                                                <PlusOutlined /> เพิ่มขั้นตอน </Button>
                                        </Form.Item>
                                    </div>
                                );
                            }}
                        </Form.List>

                        <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }} >
                            {this.state.menu.picture &&
                                <img src={ (process.env.REACT_APP_API_SERVER || "https://spaghetti-api.topwork.asia/api/") + 'picture/' + this.state.menu.picture}
                                    style={{
                                        maxWidth: '100%',
                                        display: 'block',
                                        margin: 'auto',
                                        marginBottom: 10
                                    }} />
                            }
                            <Upload {...uploadConfig} showUploadList={false} >
                                <Button><UploadOutlined /> อัพโหลดรูปภาพประกอบ </Button>
                            </Upload>
                        </div>
                    </Form>
                    <Row gutter={6}>
                        <Col span={12} >
                            <Button type="primary" form="formMenu" key="submit" htmlType="submit" size="large" block >บันทึกข้อมูล</Button></Col>
                        <Col span={12} >
                            <Link to={this.props.returnUrl} >
                                <Button type="warn" block size="large" >ยกเลิก</Button>
                            </Link>
                        </Col>
                    </Row>
                    {this.state.menu._id &&
                        <Row gutter={6} style={{ marginTop: 10 }}>
                            <Col span={24} >
                                <Button type="danger" block size="large" onClick={this.showModal} >ลบข้อมูล</Button>
                            </Col>
                        </Row>
                    }
                    <Modal
                        title="ลบข้อมูล"
                        visible={this.state.visibleDeleteModal}
                        onOk={this.confirmModal}
                        onCancel={this.hideModal}
                        okText="ตกลง"
                        cancelText="ยกเลิก"
                    >
                        <p>คุณต้องการลบข้อมูล รึไม่</p>
                    </Modal>
                </div >
        )
    }

    showModal = async () => {
        this.setState({visibleDeleteModal : true }); 
    }

    hideModal = async () => {
        this.setState({visibleDeleteModal : false }); 
    }

    confirmModal = async () => {
        try {
            const res = await Api.delete('menu/' + this.state.menu._id );
            message.info("ได้ทำการลบข้อมูลแล้ว")
            this.setState({ isSubmit : true });
        } catch (error) {
            console.log(error)
        }
    }

}


export default withRouter(MenuFormPage); 