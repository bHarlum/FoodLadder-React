import React, { Component } from 'react';

import { Card } from "antd";

export class Post extends Component {
  render() {
    return (
      <Card>
        <p>{this.props.children}</p>
      </Card>
    );
  }
}

export default Post;
