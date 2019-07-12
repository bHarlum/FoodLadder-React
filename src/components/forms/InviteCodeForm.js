import React, { Component } from "react";
import { Form, Input } from "antd";

import { Icon } from "./FormLayout";

class InviteCodeForm extends Component {

  render() {
    const { getFieldDecorator } = this.props.form;

    return(
      <Form>
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
      </Form>
    );
  }
}

const WrappedInviteForm = Form.create({ name: 'invitation_code' })(InviteCodeForm);

export default WrappedInviteForm;

