import React, { Component } from 'react';
import { Typography, Card, Row, Col, Button, Icon } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LocalAPI from "./../../apis/local";
import { Section, FullPage } from './../layout/Layout';
import { setSpinner } from "./../../actions/index";

const { Title, Paragraph } = Typography;

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const ImageContainer = styled.div`
  background-image: ${props => 'url('+props.image+')'};
  height: 300px;
  background-size: cover;
  background-position: center;
`;

export class Project extends Component {

  state = {
    project: null,
  }
  

  componentDidMount() {
    this.props.setSpinner(true);
    const { id } = this.props.match.params;
    LocalAPI.get(`/projects/${id}`)
      .then( async response => {
        const { data } = response;
        const { users } = data;
        const { currentUser } = this.props;
        await this.setState({
          project: data,
        })
        this.props.setSpinner(false);
        console.log(this.state);
      }).catch(err => {
        console.log(err);
      });

  }

  render() {
    const { project } = this.state;
    return (
      <FullPage>
        <Row>
          <Col xs={{ span: 24 }} md={{ span: 5 }}></Col>
          <Col xs={{ span: 24 }} md={{ span: 14 }}>
            <Section>
              {project &&
                <Row>
                   { project.files[0] && 
                     <ImageContainer image={encodeURI(`${process.env.REACT_APP_API_URL}/files/export/${project.files[0].link}`)} />
                   } { !project.files[0] &&
                    <ImageContainer image="https://ucd9601a2aadc2bf745b563ceeb9.previews.dropboxusercontent.com/p/thumb/AAeg_qTNbFZ5eOwRiW04IDDqHEhJPaNb_z_UL3fqeG037ZHNTz9saH68AlnbldLOphoZ_Rt7MnyWmXbMdA7I70UIaYVBwI7y05ZTQDcCHMmVnJZVr2CvUNjkz5WkKH87Raq80XfTC7-pqsyccpIcbRZNBvEvhctPef8n3wLqLgbssRMp_WHqAcrhdTS89aiL4clMXi2duC89ejZWGmAN2-a68qs4nS8DbjjjE1auOnBSsMdEZTYmaW7LVvahnucifzUN4Kl-lGL7X3yxTkBVNEFkKyfPoWA2gmnG5hf-UmF_UmtYZcuuSs2x6GBPSPFv7kVuFsNb_G_ZSPdauQIs931T/p.jpeg?fv_content=true&size_mode=5" />
                   }
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <span><Icon type="home" />{project.address.city}, {project.address.country}</span>
                    <Title>{project.title}</Title>
                    <Paragraph>
                      {lorem}
                    </Paragraph>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}></Col>
                </Row>
              }
            </Section>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 5 }}>
            <Section>
              { project &&
                <Link to={`/projects/edit/${project._id}`}>
                  <Button type="primary">Edit Project</Button>
                </Link>
              }
            </Section>
          </Col>
        </Row>
      </FullPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.current
  }
} 

export default connect(mapStateToProps, { setSpinner })(Project);
