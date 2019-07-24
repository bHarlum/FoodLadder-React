import React, { Component } from 'react';
import moment from "moment";
import { Card, Avatar } from "antd"; 

import { Author, Date, PostCard, ImageContainer } from './post_styles';
import { Capitalized } from "../../../layout/app_styles";

const { Meta } = Card;

export class Post extends Component {

  render() {
    const { actions } = this.props;
    const { author, createdAt } = this.props.post;
    return (
      <PostCard
        actions={actions}
        first={this.props.first}
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
        {this.props.first &&
          <ImageContainer>
            
          </ImageContainer>     
        } 
        <p>{this.props.children}</p>
      </PostCard>
    );
  }
}

export default Post;
