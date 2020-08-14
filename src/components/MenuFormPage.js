import React from 'react';
import { Button, Row, Col, Form, Input, Select, message } from 'antd';
import {
    MinusCircleOutlined,
    PlusOutlined,
} from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import Api from '../api/Api';

export default class MenuFormPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSubmit: false,
            menu_id: props.menu_id
        }
    }
    render() {

        const onFinish = async (values) => {

            try {
                const res = await Api.post('menu', { ...values, picture: 'path' });
                message.info("ได้ทำการบันทึกข้อูลแล้ว")
                this.setState({ isSubmit: true });
            } catch (error) {
                console.log(error)
            }
        }

        return (
            this.state.isSubmit ?
                <Redirect to="/main"></Redirect> :
                <div style={{ padding: 10 }}>
                    {!this.state.menu_id ? <h1>เพิ่มเมนู</h1> : <h1>แกัไขเมนู</h1>}
                    <Form layout="vertical" name="formMenu" onFinish={onFinish}  >
                        <Form.Item label="ชื่อเมนู" name="title" >
                            <Input placeholder="" />
                        </Form.Item>
                        <Form.Item label="รายละเอียดเมนู" name="detail" >
                            <Input.TextArea rows="3" />
                        </Form.Item>
                        <Form.Item label="ประเภทอาหาร" name="group"  >
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

                        

                    </Form>
                    <Row gutter={6}>
                        <Col span={12} >
                            <Button type="primary" form="formMenu" key="submit" htmlType="submit" size="large" block >บันทึกข้อมูล</Button></Col>
                        <Col span={12} >
                            <Link to="/main" >
                                <Button type="danger" block size="large" >ยกเลิก</Button></Link>
                        </Col>
                    </Row>
                </div >
        )
    }
}