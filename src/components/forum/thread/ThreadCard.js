import React, { Component } from 'react';
import { Avatar, List, Icon } from "antd";
import { Link } from "react-router-dom";

// import { Tag } from "./ThreadCardStyles";

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

  render(){

    //TODO: This can be removed if tags aren't being implemented.
    // const tags = this.props.tags.map((tag) => {
    //   return(
    //     <Tag>{tag}</Tag>
    //   );
    // });

    const { title, _id: id, views, upvotes, posts } = this.props.item;

    return (
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
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta 
            title={title}
            // description={tags}
            avatar={<Avatar icon="user" />}
          />
          {this.props.children}
        </List.Item>
      </Link>
    );
  }
}

export default ThreadCard;
