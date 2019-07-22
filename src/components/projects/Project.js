import React, { Component } from 'react';
import { Typography, Card } from "antd";
import { connect } from "react-redux";

import LocalAPI from "./../../apis/local";
import { Section, FullPage } from './../layout/Layout';
import { setSpinner } from "./../../actions/index";

const { Title, Text } = Typography;

export class Project extends Component {

  state = {
    project: null
  }
  

  componentDidMount() {
    this.props.setSpinner(true);
    const { id } = this.props.match.params;
    LocalAPI.get(`/projects/${id}`)
      .then( async response => {
        await this.setState({
          project: response.data
        })
        this.props.setSpinner(false);
        console.log(this.state);
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    const { project } = this.state;
    console.log(project);
    return (
      <FullPage>
        <Section>
          {project &&
            <div>
              <Card style={ {backgroundImage: 'url(https://foodladder.org/wp-content/uploads/2018/08/IMG_4397-1-2000x1200.jpg)'} }><Title>{project.name}</Title></Card>
              <Card>
                <Text>{`${project.address.line1}, ${project.address.line2}, ${project.address.city}, ${project.address.state}, ${project.address.country}.`}</Text>
              </Card>
              <Card>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia erat eros, quis maximus neque feugiat pharetra. Donec mollis a magna vel pretium. Donec lacinia magna id odio ornare sagittis. Maecenas suscipit tellus sit amet viverra rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;.
                </Text>
              </Card>
            </div>
          }
        </Section>
      </FullPage>
    );
  }
}

export default connect(null, { setSpinner })(Project);
