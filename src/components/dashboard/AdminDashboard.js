import React, { Component } from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

class AdminDashboard extends Component {

  render(){

    return(
      <Card>
        <Link to="/projects/new">
          <Button type="primary">Add a new Project</Button>
        </Link>
      </Card>
    )
  }
}

export default AdminDashboard;