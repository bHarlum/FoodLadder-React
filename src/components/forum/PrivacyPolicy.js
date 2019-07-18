import React, { Component } from "react";

import { Collapse } from "antd";

const { Panel } = Collapse;

const text = (
  <p style={{ paddingLeft: 24 }}>
    <p>
      Personal Information is information or an opinion that identifies an
      individual. Examples of Personal Information we collect include: names,
      addresses, email addresses, phone and facsimile numbers. This Personal
      Information is obtained in many ways including [interviews,
      correspondence, by telephone and facsimile, by email, via our website
      www.foodladder.org, from your website, from media and publications, from
      other publicly available sources, from cookies- delete all that aren’t
      applicable] and from third parties.
    </p>
    <p>
      We don’t guarantee website links or policy of authorised third parties. We
      collect your Personal Information for the primary purpose of providing our
      services to you, providing information to our clients and marketing. We
      may also use your Personal Information for secondary purposes closely
      related to the primary purpose, in circumstances where you would
      reasonably expect such use or disclosure. You may unsubscribe from our
      mailing/marketing lists at any time by contacting us in writing.
    </p>
  </p>
);

const text_2 = (
  <p style={{ paddingLeft: 24 }}>
    <p>
      Sensitive information is defined in the Privacy Act to include information
      or opinion about such things as an individual's racial or ethnic origin,
      political opinions, membership of a political association, religious or
      philosophical beliefs, membership of a trade union or other professional
      body, criminal record or health information.
    </p>
    <p>Sensitive information will be used by us only:</p>
    <li> For the primary purpose for which it was obtained</li>
    <li>
      For a secondary purpose that is directly related to the primary purpose
    </li>
    <li> With your consent; or where required or authorised by law.</li>
  </p>
);

const text_3 = (
  <p style={{ paddingLeft: 24 }}>
    Where reasonable and practicable to do so, we will collect your Personal
    Information only from you. However, in some circumstances we may be provided
    with information by third parties. In such a case we will take reasonable
    steps to ensure that you are made aware of the information provided to us by
    the third party.
  </p>
);
const text_4 = (
  <p style={{ paddingLeft: 24 }}>
    <p>
      Your Personal Information may be disclosed in a number of circumstances
      including the following:
    </p>
    <li>Third parties where you consent to the use or disclosure; and</li>
    <li> Where required or authorised by law.</li>
  </p>
);
const text_5 = (
  <p style={{ paddingLeft: 24 }}>
    <p>
      Your Personal Information is stored in a manner that reasonably protects
      it from misuse and loss and from unauthorized access, modification or
      disclosure.
    </p>
    <p>
      When your Personal Information is no longer needed for the purpose for
      which it was obtained, we will take reasonable steps to destroy or
      permanently de-identify your Personal Information. However, most of the
      Personal Information is or will be stored in client files which will be
      kept by us for a minimum of 7 years.
    </p>
  </p>
);
const text_6 = (
  <p style={{ paddingLeft: 24 }}>
    <p>
      <p>
        You may access the Personal Information we hold about you and to update
        and/or correct it, subject to certain exceptions. If you wish to access
        your Personal Information, please contact us in writing.
      </p>
    </p>
    <strong>Food Ladder</strong> will not charge any fee for your access
    request, but may charge an administrative fee for providing a copy of your
    Personal Information.
  </p>
);
const text_7 = (
  <p style={{ paddingLeft: 24 }}>
    It is an important to us that your Personal Information is up to date. We
    will take reasonable steps to make sure that your Personal Information is
    accurate, complete and up-to-date. If you find that the information we have
    is not up to date or is inaccurate, please advise us as soon as practicable
    so we can update our records and ensure we can continue to provide quality
    services to you.
  </p>
);
const text_8 = (
  <p style={{ paddingLeft: 24 }}>
    This Policy may change from time to time and is available on our website.
  </p>
);
const text_9 = (
  <p style={{ paddingLeft: 24 }}>
    <p>
      If you have any queries or complaints about our Privacy Policy please
      contact us at:
    </p>
    <p>PO Box 423, Manly NSW 1655</p>
    <p>info@foodladder.org</p>
  </p>
);

export class PrivacyPolicy extends Component {
  render() {
    return (
      <div>
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
          <Collapse bordered={false} defaultActiveKey={["1"]}>
            <Panel
              header="What is Personal Information and why do we collect it?"
              key="1"
            >
              {text}
            </Panel>
            <Panel header="Sensitive Information" key="2">
              {text_2}
            </Panel>
            <Panel header="Third Parties" key="3">
              {text_3}
            </Panel>
            <Panel header="Disclosure of Personal Information" key="4">
              {text_4}
            </Panel>
            <Panel header="Security of Personal Information" key="5">
              {text_5}
            </Panel>
            <Panel header="Access to your Personal Information" key="6">
              {text_6}
            </Panel>
            <Panel
              header="Maintaining the Quality of your Personal Information"
              key="7"
            >
              {text_7}
            </Panel>
            <Panel header="Policy Updates" key="8">
              {text_8}
            </Panel>
            <Panel header="Privacy Policy Complaints and Enquiries" key="9">
              {text_9}
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
