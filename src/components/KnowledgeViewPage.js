import React from 'react';
import spaghetti from '../spaghetti.jpg';

import { Row, Col, Typography, List } from 'antd';
import { Link } from 'react-router-dom';

import { withRouter } from "react-router";
import Api from '../api/Api';

class knowledgeViewPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { knowledge: { title: '', detail: '', image: '' } }

    }

    async componentDidMount() {
        this.getKnowledgeDetail();
    }

    getKnowledgeDetail = async () => {
        try {
            const { id } = this.props.match.params ;
            const res = await Api.get('knowledge/' + id);
            this.setState({ knowledge: res.data.data });

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>{this.state.knowledge.title} </h1>
                {this.state.knowledge.image && <img src={this.state.knowledge.image} style={{ width: '100%' }} />}
                <p style={{ fontSize: 18, marginTop: 10 }}>
                    {this.state.knowledge.detail}
                </p>
            </div>
        )
    }
}

export default withRouter(knowledgeViewPage); 