import React from 'react';
import logo from '../logo.png';

import { Row, Col, Typography, List, Input } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import Api from '../api/Api';

const { Search } = Input;


export default class knowledgePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { knowledgeList: [], txtSearch: "", isSearch: false }

    }

    async componentDidMount() {
        this.getKnowledgeList();
    }

    getKnowledgeList = async () => {
        try {
            if (this.state.txtSearch) {
                const res = await Api.get('knowledge/search/' + this.state.txtSearch);
                this.setState({ knowledgeList: res.data.data });
            } else {
                const res = await Api.get('knowledge');
                this.setState({ knowledgeList: res.data.data });
            }

        } catch (error) {
            console.log(error)
        }
    }


    handleChangeSearch = (event) => {
        this.setState({ txtSearch: event.target.value });
    }


    handleKeyDownSearch = async (event) => {
        if (event.key === 'Enter') {
            this.getKnowledgeList();
        }
    }


    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>เนื้อหาความรู้</h1>
                <Input placeholder="Search"
                    prefix={<SearchOutlined />} 
                    value={this.state.txtSearch}
                    onChange={this.handleChangeSearch}
                    onKeyDown={this.handleKeyDownSearch}
                    />
                <br />
                <Row>
                    <Col span={24}>
                        <List
                            bordered
                            dataSource={this.state.knowledgeList}
                            renderItem={item => (
                                <List.Item>
                                    <Link to={'/knowledge/' + item._id} >
                                        <img src={item.image ? item.image : logo} style={{ maxWidth: '30%', float: 'left', display: 'block' }} />
                                        <div style={{ maxWidth: '70%', float: 'left', paddingLeft: 10 }}>
                                            <h3 style={{ marginBottom: 0 }}>{item.title}</h3>
                                            <p style={{ color: '#808080' }}>{item.detail}</p>
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