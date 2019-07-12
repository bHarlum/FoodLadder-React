import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

import { Icon } from "./FormLayout";

class InviteCodeForm extends Component {

  render() {
    const { getFieldDecorator } = this.props.form;

    return(
      <Form layout="horizontal">
        <Form.Item>
          {getFieldDecorator('Invitation Code', {
              rules: [{ required: true, message: 'Code is required' }],
            })(
              <Input
                prefix={<Icon type="rocket" />}
                placeholder="Invitation Code"
              />,
            )}
        </Form.Item>
        <Link to="/register">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Link>
      </Form>
    );
  }
}

const WrappedInviteForm = Form.create({ name: 'invitation_code' })(InviteCodeForm);

export default WrappedInviteForm;

