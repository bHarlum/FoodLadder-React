import React, { Component } from 'react';
import { Button, Icon, List, Typography } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LocalAPI from "./../../apis/local";
import ThreadCard from "./thread/ThreadCard";
import { Excerpt, Section, FullPage, Note, ColumnedSection } from "./../layout/app_styles";
import { setLocation } from "./../../actions";

const { Title } = Typography;

export class Forum extends Component {

  state = {
    threads: null,
  }

  async componentDidMount() {
    const getThreads = await LocalAPI.get('/threads');
    const threads = getThreads.data;
    this.setState({ threads });
    this.props.setLocation("forum");
  }

  componentWillUnmount() {
    this.props.setLocation(null);
  }

  render() {
    const { threads } = this.state;
    return (
      <FullPage>
        <Section>
          <ColumnedSection
            thirdCol={
              <Section>
                <Link to="forum/threads/new">
                  <Button type="primary">
                    <Icon type="plus" />
                    Create a New Post
                  </Button>
                </Link>
              </Section>
            }
          >
            <Title>Forum</Title>
            { threads && 
              <List 
                dataSource={threads}
                itemLayout="vertical"
                renderItem={item => {
                  return(
                    <ThreadCard item={item}>
                      <Excerpt text={item.posts[0].body} />
                    </ThreadCard>
                  )
                }}
              />
            }
            { !threads &&
              <Note>There are no posts yet</Note>
            }
          </ColumnedSection>
        </Section>
      </FullPage>
    );
  }
}

export default connect(null, { setLocation })(Forum);
