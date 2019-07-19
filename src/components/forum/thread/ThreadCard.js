import React, { Component } from 'react';
import { Avatar, List, Icon } from "antd";

import { Tag } from "./ThreadCardStyles";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ThreadCard extends Component {
  static defaultProps = {
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    const tags = this.props.tags.map(tag => {
      return <Tag>{tag}</Tag>;
    });

    const { title, _id: id } = this.props.item;

    return (
      <List.Item
        key={ id }
        actions={[
          <IconText type="star-o" text="156" />,
          <IconText type="like-o" text="156" />,
          <IconText type="message" text="2" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta 
          title={title}
          description={tags}
          avatar={<Avatar icon="user" />}
        />
        {this.props.children}
      </List.Item>
    );
  }
}

export default ThreadCard;
