import React, { Component } from "react";
import { Collapse, Typography } from "antd";

import { Section, ColumnedSection } from "../layout/app_styles";
import { text } from "./FaqData";

const { Panel } = Collapse;
const { Title } = Typography;

export class Faq extends Component {
  render() {
    return (
      <Section>
        <ColumnedSection>
          <Title>FAQ</Title>
          <Collapse accordion bordered={false} defaultActiveKey={["1"]}>
            { text.map(el => {
              return(
                <Panel header={el.header}>
                  <p>{el.body}</p>
                </Panel>
              )
            })}
          </Collapse>
        </ColumnedSection>
      </Section>
    );
  }
}

export default Faq;
