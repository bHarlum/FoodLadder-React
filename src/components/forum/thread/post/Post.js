import React, { Component } from 'react';

export class Post extends Component {
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Post;
