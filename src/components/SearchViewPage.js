import React from 'react';
import logo from '../logo.png';

import { Row, Col, Typography, List } from 'antd';
import { Link } from 'react-router-dom';
import Api from '../api/Api';

import { withRouter } from "react-router";

class SearchViewPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { menuList: [] };
    }

    async componentDidMount() {
        try {
            const search = this.props.match.params.search;
            const res = await Api.get('menu/search/' + search);
            this.setState({ menuList: res.data.data });
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        const head = this.props.match.params.search;
        return (
            <div style={{ padding: 10 }}>
                <h1>ผลการค้นหา ({head}) </h1>
                {this.state.menuList.map((item) =>
                    <div>
                        <Link to={'/menu/' + item._id}>
                            <div style={{textAlign :'center'}}>
                                <img src={item.picture ? (process.env.REACT_APP_API_SERVER || "https://spaghetti-api.topwork.asia/api/") + 'picture/' + item.picture : logo} style={{ maxWidth: '100%', paddingBottom: 10 }} />
                            </div>
                            <h3 style={{ fontSize: 24, marginBottom: 0 }}  >{item.title}</h3>
                            <p style={{ fontSize: 18, marginTop: 0, color: '#000' }}>
                                {item.detail}
                            </p>
                        </Link>
                    </div>
                )}

            </div>
        )
    }
}

export default withRouter(SearchViewPage);