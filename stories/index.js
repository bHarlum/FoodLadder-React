import React from 'react';
import { storiesOf } from '@storybook/react';
import './../src/styles/App.css';

import LoginForm from "./../src/components/forms/LoginForm";

storiesOf('Forms', module)
  .add('Login', () => (
    <LoginForm/>
  ));