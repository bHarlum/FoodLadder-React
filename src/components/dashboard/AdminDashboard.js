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
          locale={{emptyText: `There are no projects`}}
          renderItem={item => {
            const { name, reportDate, _id } = item;
            return(
              <Link to={`/projects/${_id}`}>
                <List.Item>
                  <List.Item.Meta 
                    title={name}
                  />
                  <p>Next reporting date: {reportDate}</p>
                </List.Item>
              </Link>
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