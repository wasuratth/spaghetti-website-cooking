import React from 'react';
import { Rate, Button  , Row  , Col} from 'antd';

import { Link } from 'react-router-dom';

export default class MenuFormPage extends React.Component {

    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>เพิ่มเมนู</h1>

                <Row gutter={6}>
                    <Col span={12} > <Button type="primary" block >บันทึกข้อมูล</Button></Col>
                    <Col span={12} > <Link><Button type="danger" block>ยกเลิก</Button></Link>  </Col>
                </Row>

            </div>
        )
    }
}