import React, { Component } from "react";
import { Collapse } from "antd";

import { Section, ColumnedSection } from "../layout/app_styles";
import { Group } from "./PrivacyPolicyStyles";
import { text } from "./PrivacyPolicyData";

const { Panel } = Collapse;

export class PrivacyPolicy extends Component {
  render() {
    return (
      <Section>
        <ColumnedSection>
          <div>
            <h1>
              <span>
                <strong>Privacy Policy</strong>
              </span>
            </h1>
            <p>
              <strong>Food Ladder</strong> is committed to providing quality
              services to you and this policy outlines our ongoing obligations to
              you in respect of how we manage your Personal Information.
            </p>
            <p>
              We have adopted the Australian Privacy Principles (APPs) contained
              in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the
              way in which we collect, use, disclose, store, secure and dispose of
              your Personal Information.
            </p>
            <p>
              A copy of the Australian Privacy Principles may be obtained from the
              website of The Office of the Australian Information Commissioner at
              www.aoic.gov.au
            </p>
          </div>
          <div>
            <Collapse accordion bordered={false} defaultActiveKey={["0"]}>
              {text.map((p, index) => {
                return (
                  <Panel header={p.header} key={index}>
                    <Group>
                      {p.body}
                    </Group>
                  </Panel>
                );
              })}
            </Collapse>
          </div>
        </ColumnedSection>
      </Section>
    );
  }
}

export default PrivacyPolicy;
