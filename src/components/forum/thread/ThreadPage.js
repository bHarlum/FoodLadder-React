import React, { Component } from 'react';

import Post from "./post/Post";
import { FullPage } from "./../../layout/Layout";

const posts = [
  {
    body: "test",
    author: {
      firstName: "Ari",
      lastName: "Friedgut",
      admin: false,
    },
    key: 1
  },
  {
    body: "test 2",
    author: {
      firstName: "Bruce",
      lastName: "McClure",
      admin: false,
    },
    key: 2
  },
  {
    body: "test 3",
    author: {
      firstName: "Bryce",
      lastName: "Harlum",
      admin: true,
    },
    key: 3,
  }
]

class ThreadPage extends Component {
  render() {
    return (
      <FullPage>
        {posts.map(post => {
          return <Post key={post.key}>{post.body}</Post>
        })}
      </FullPage>
    );
  }
}

export default ThreadPage;
