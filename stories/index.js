import React from 'react';
import { storiesOf } from '@storybook/react';
import './../src/styles/App.css';

import styled from "styled-components";

import LoginForm from "./../src/components/forms/LoginForm";
import ThreadCard from "./../src/components/forum/thread/ThreadCard";
//TODO: Reimplement when 'Link' Tag is removed from InviteForm.
// import InviteCodeForm from '../src/components/forms/InviteCodeForm';

const Story = styled.div`
  margin: 20px;
`;

const exampleTags = ["soils", "tomatoes", "test"];

storiesOf('Forms', module)
  .add('Login', () => (
    <Story>
      {/* <LoginForm/> */}
    </Story>
  ))
  .add('Invite Code', () => (
    <Story>
      {/* <Form>
        <InviteCodeForm/>
      </Form> */}
    </Story>
  ));

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