import React from 'react';

import icon1 from '../image/icon/1.png';
import icon2 from '../image/icon/2.png';
import icon3 from '../image/icon/3.png';
import icon4 from '../image/icon/4.png';
import icon5 from '../image/icon/5.png';
import icon6 from '../image/icon/6.png';
import icon7 from '../image/icon/7.png';
import icon8 from '../image/icon/8.png';
import icon9 from '../image/icon/9.png';




import { Row, Col, Button } from 'antd';

import { Link } from 'react-router-dom';
import Item from 'antd/lib/list/Item';

export default class MainPage extends React.Component {
    render() {
        const menus = [
            { icon: icon1, title: "เมนูง่ายๆ" },
            { icon: icon2, title: "เมนูเส้น" },
            { icon: icon3, title: "เมนูเนื้อสัตว์" },
            { icon: icon4, title: "เมนูจานเดียว" },
            { icon: icon5, title: "เมนูเพื่อสุขภาพ" },
            { icon: icon6, title: "เมนูสลัด" },
            { icon: icon7, title: "เมนูผลไม้" },
            { icon: icon8, title: "เมนูของหวาน" },
            { icon: icon9, title: "เมนูเครื่องดื่ม" },
        ]


        return (
            <div style={{ padding: 10 }}>
                <h1>กลุ่มอาหาร</h1>
                <Row>
                    {menus.map((item, key) => <Col span={8}>
                        <div style={{ padding: 5, textAlign: 'center' , marginBottom : 10  }}>
                            <Link to={'/group/c' + (key + 1)} >
                                <img src={item.icon} style={{ maxWidth: '100%', display: 'block', margin:'auto' }} />
                                <div className={'font-kanit'} style={{ color: '#808080' , fontSize : 18 , marginTop:10 , marginBottom : 10  }}>{item.title}</div>
                            </Link>
                        </div>
                    </Col>)}
                </Row>
                <Row>
                    <Col  span={24} >
                        <Link to="/menu/add" >
                            <Button type="primary" block className={['font-kawit']} >เพิ่มเมนูของท่าน</Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        )
    }
}