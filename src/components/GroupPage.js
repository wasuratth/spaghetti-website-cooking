import React from 'react';
import logo from '../logo.png';
import pic_menu1 from '../image/pic_menu1.jpg'
import pic_menu2 from '../image/pic_menu2.jpg'
import pic_menu3 from '../image/pic_menu3.jpg'

import { Row, Col, List, Input, Rate, Card, Carousel } from 'antd';
import { SearchOutlined  } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Search } = Input;    

const data = [
    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: '',
    },
  ];

export default class GroupPage extends React.Component {
    render() {


        return (
            <div style={{ padding: 10 }}>
                <h1>อาหารเพื่อสุขภาพ</h1>
                <Input placeholder="Search" 
                       prefix={<SearchOutlined  />} />
                <br />            
                <br />  
                
                {/* <Row>
                <img src={pic_menu1} style={{maxWidth: '30%' , float:'left'  , display : 'block'}} />
                </Row>
                
                <Row>
                <img src={pic_menu3} style={{maxWidth: '30%' , float:'left'  , display : 'block'}} />
                </Row> */}

                <div>
                    <Carousel autoplay>
                        <div><h3><img src={pic_menu1} style={{maxWidth: '100%' , float:'center'  , display : 'block'}} /></h3></div>
                        <div><h3><img src={pic_menu1} style={{maxWidth: '100%' , float:'center'  , display : 'block'}} /></h3></div>
                        <div><h3><img src={pic_menu1} style={{maxWidth: '100%' , float:'left'  , display : 'block'}} /></h3></div>                    
                    </Carousel>
                </div>

                {/* <div className="site-card-wrapper">
                    <Row gutter={24}>
                    <Col span={8}>
                        <Card >
                        Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card >
                        <img src={pic_menu3} style={{maxWidth: '100%' , float:'left'  , display : 'block'}} />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card >
                        Card content
                        </Card>
                    </Col>
                    </Row>
                </div> */}

                {/* <List
                    grid={{ gutter: 16, column: 2 }}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <Card title={item.title}><img src={pic_menu3} style={{maxWidth: '80%' , float:'left'  , display : 'block'}} /></Card>
                    </List.Item>
                    )}
                />, */}

                <h3>Recommend Menu</h3>
                <Row>
                    <Col span={24}>
                        <List
                            bordered
                            dataSource={ [ ... Array(16)].map( (_i , k) => k + 1) }
                            renderItem={item => (
                                <List.Item>
                                    <Link to={'/menu/' + item} >                                        
                                        <img src={logo} style={{maxWidth: '30%' , float:'left'  , display : 'block'}} />
                                        <div style={{ maxWidth: '70%' , float:'left' , paddingLeft: 10 }}>
                                            <h3 style={{marginBottom: 0 }}>ไข่เจียวหมูสับ</h3>
                                            <p style={{ color: '#808080' }}>ไข่เจียวหมูสับ ไข่เจียวหมูสับ ไข่เจียวหมูสับ ไข่เจียวหมูสับ ไข่เจียวหมูสับ ไข่เจียวหมูสับ ไข่เจียวหมูสับ</p>                                            
                                            <Rate disable allowHalf defaultValue={3} />                                            
                                        </div>     
                                    </Link>
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}