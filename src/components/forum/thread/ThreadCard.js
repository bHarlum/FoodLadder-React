import React, { Component } from 'react';
import { Avatar, List } from "antd";
import { Link } from "react-router-dom";

import { IconText } from "./../../layout/Layout";
import { Card } from "./ThreadStyles";

class ThreadCard extends Component {
  render(){

    const { title, _id: id, views, upvotes, posts } = this.props.item;

    return (
      <Card>
        <Link to={`/forum/threads/${id}`}>
          <List.Item
            key={ id }
            actions={[
              <IconText type="eye" text={views} />,
              <IconText type="like-o" text={upvotes} />,
              <IconText type="message" text={posts.length - 1} />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://foodladder.org/wp-content/uploads/2018/07/IMG_4319-1-1.jpg"
              />
            }
          >
            <List.Item.Meta 
              title={title}
              avatar={<Avatar icon="user" />}
            />
            {this.props.children}
          </List.Item>
        </Link>
      </Card>
    );
  }
}

export default ThreadCard;
