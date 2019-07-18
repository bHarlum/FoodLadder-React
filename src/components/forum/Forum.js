import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, List } from "antd";
import { Link } from "react-router-dom";

import LocalAPI from "./../../apis/local";
import ThreadCard from "./thread/ThreadCard";

const { Search } = Input;

const lorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores...";

export class Forum extends Component {

  state = {
    threads: null,
  }

  async componentDidMount() {
    const getThreads = await LocalAPI.get('/threads');
    const threads = getThreads.data;
    this.setState({ threads });
  }

  render() {
    const { threads } = this.state;
    console.log(threads);
    return (
      <Row>
        <Col s={{ span: 24 }} md={{ span: 5 }} />
        <Col s={{ span: 24 }} md={{ span: 14 }}>
          { threads && 
            <List 
              dataSource={threads}
              itemLayout="vertical"
              renderItem={item => {
                return(
                  // <ThreadCard item={item}>{item.posts[0].body}</ThreadCard>
                  <ThreadCard item={item}>{lorem}</ThreadCard>
                )
              }}
            />
          }
        </Col>
        <Col s={{ span: 24 }} md={{ span: 5 }}>
          <Search 
            placeholder="Search posts"
            enterButton
          />
          <Link to="forum/threads/new">
            <Button type="primary">
              <Icon type="plus" />
              Create a New Post
            </Button>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default Forum;
