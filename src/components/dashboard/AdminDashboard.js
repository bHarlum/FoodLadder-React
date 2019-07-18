import React, { Component } from "react";
import { Card, Button, List } from "antd";
import { Link } from "react-router-dom";

import LocalAPI from "./../../apis/local";

class AdminDashboard extends Component {

  state = {
    projects: []
  }

  componentDidMount() {
    LocalAPI.get("/projects/")
      .then( response => {
        this.setState({projects: response.data})
      }).catch( err => {
        console.log(err);
      })
  }

  render(){
    const { projects } = this.state;
    return(
      <Card>
        <List
          dataSource={projects}
          renderItem={item => {
            return(
              <List.Item>
                <List.Item.Meta 
                  title={item.name}
                />
                <p>Next reporting date: {item.reportDate}</p>
              </List.Item>
            );
          }}
        />
        <Link to="/projects/new">
          <Button type="primary">Add a new Project</Button>
        </Link>
      </Card>
    )
  }
}

export default AdminDashboard;