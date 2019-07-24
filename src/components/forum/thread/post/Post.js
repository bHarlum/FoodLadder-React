import React, { Component } from 'react';
import moment from "moment";
import { Card, Avatar } from "antd"; 
import { connect } from "react-redux";

import { Author, Date, PostCard } from './post_styles';
import { Capitalized } from "../../../layout/app_styles";
import { ImageContainer } from "./../../../projects/project_styles";

const { Meta } = Card;

export class Post extends Component {

  render() {
    const { actions, first, children, thread } = this.props;
    const { author, createdAt } = this.props.post;
    const { file } = thread;

    return (
      <PostCard
        actions={actions}
        first={first}
      >
        <Meta 
          title={<Author level={4}>
                  <Capitalized text={author.firstName}/>
                </Author>}
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          description={
            <Date>{moment(createdAt).format('hh:mm - Do MMMM, YYYY')}</Date>
          }
        />
        <p>{children}</p>
        {(first && file) &&
          <ImageContainer image={encodeURI(`${process.env.REACT_APP_API_URL}/files/export/${file.link}`)}>
            
          </ImageContainer>     
        } 
      </PostCard>
    );
  }
}

const mapStateToProps = state => {
  return {
    thread: state.forum.thread
  }
}

export default connect(mapStateToProps)(Post);
