import React from 'react';
import { storiesOf } from '@storybook/react';
import './../src/styles/App.css';

import styled from "styled-components";

import ThreadCard from "./../src/components/forum/thread/ThreadCard";

const Story = styled.div`
  margin: 20px;
`;

const exampleTags = ["soils", "tomatoes", "test"];

storiesOf('Forum', module)
  .add('Thread Preview', () => (
    <Story>
      <ThreadCard 
        tags={exampleTags} 
        title="Thread Card Test?" 
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
        latestReply="John Smith"
      />
    </Story>
  ));