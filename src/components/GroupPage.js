import React from 'react';
import { useParams, Redirect } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import { withRouter } from "react-router";


import logo from '../logo.png';

import pic_menu1 from '../image/pic_menu1.jpg'
import pic_menu2 from '../image/pic_menu2.jpg'
import pic_menu3 from '../image/pic_menu3.jpg'

import { Row, Col, List, Input, Rate, Card, Carousel } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Api from '../api/Api';

import ListItem from '../components/ListItem';

const { Search } = Input;



class GroupPage extends React.Component {


    constructor(props) {
        super(props)
        this.state = { title: "", menuList: [], txtSearch: "", isSearch: false }

    }

    async componentDidMount() {
        try {
            const id = this.props.match.params.id;
            const res = await Api.get('groupmap/type/' + id);
            this.setState({ title: res.data.title, menuList: res.data.data });
        } catch (error) {
            console.log(error)
        }

    }

    handleChangeSearch = (event) => {
        this.setState({ txtSearch: event.target.value });
    }


    handleKeyDownSearch = async (event) => {
        if (event.key === 'Enter') {
            this.searchMenu();
        }
    }

    searchMenu = async () => {
        this.setState({ isSearch: true });
    }


    render() {


        return (this.state.isSearch ? <Redirect to={'/search/' + this.state.txtSearch} /> :
            <div style={{ padding: 10 }}>
                <h1>{this.state.title}</h1>
                <Input placeholder="Search" prefix={<SearchOutlined />}
                    value={this.state.txtSearch}
                    onChange={this.handleChangeSearch}
                    onKeyDown={this.handleKeyDownSearch} />
                {/* <Row>
                <img src={pic_menu1} style={{maxWidth: '30%' , float:'left'  , display : 'block'}} />
                </Row>
                
                <Row>
                <img src={pic_menu3} style={{maxWidth: '30%' , float:'left'  , display : 'block'}} />
                </Row> */}
                {/*                 
                <div>
                    <Carousel autoplay>
                        <div><h3><img src={pic_menu1} style={{maxWidth: '40%' , float:'center'  , display : 'block'}} /></h3></div>
                        <div><h3><img src={pic_menu1} style={{maxWidth: '40%' , float:'center'  , display : 'block'}} /></h3></div>
                        <div><h3><img src={pic_menu1} style={{maxWidth: '40%' , float:'center'  , display : 'block'}} /></h3></div>                    
                    </Carousel>
                </div> 
*/}

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

                <h2 style={{marginTop:10 }}>เมนูแนะนำ</h2>
                <Row>
                    <Col span={24}>
                        <List
                            bordered
                            dataSource={this.state.menuList}
                            renderItem={item => {
                                const { _id, title, detail, picture, star } = item.m_id;
                                return (
                                    <List.Item>
                                        <Link to={'/menu/' + _id} style={{ display: 'block' }} >
                                            <ListItem {...item.m_id} />
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


export default withRouter(GroupPage);
