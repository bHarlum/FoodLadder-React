import React, { Component } from "react";

export class Faq extends Component {
  render() {
    return (
      <div>
        <h3>FREQUENTLY ASKED QUESTIONS</h3>

        <p>Q: Do you own any of your social enterprises?</p>

        <p>
          A: No, we only work with partners or local communities who own the
          Food Ladder system for their benefit. We work alongside them for a
          period of time to assist with the day-to-day running of the site. Upon
          a mutually agreed time we leave the communities and allow them to
          flourish.
        </p>

        <p>Q: Do you only work with on-ground partners</p>

        <p>
          {" "}
          A: Yes, as we prefer to keep our team small and feel that we have the
          greatest impact when we work with local partners who are on the ground
          and can help fulfil our mission of minimising food insecurity.
        </p>

        <p>Q: Is Food Ladder just a greenhouse?</p>

        <p>
          A: No, Food Ladder is a series of technologies and innovative growing
          practices, which create the optimal conditions for growing vegetables
          in what would otherwise be very hostile conditions. Each country, in
          which Food Ladder works, has a different set of challenges and
          requirements to ensure growing is optimised and economic outcomes are
          assured.
        </p>

        <p>
          Q: What is the social enterprise model? Do the communities sell their
          product or eat it?
        </p>

        <p>
          A: The model is whatever the on-ground partner and community decides
          is best for the local people. We like to think that there is a blend
          between selling produce to establish a financially sustainable
          business and providing local nutritious food and employment to the
          community itself. Ultimately it is their decision.
        </p>

        <p>Q: How can I help? Do you take on volunteers?</p>

        <p>
          A: Help is always appreciated. Focused volunteering is the most useful
          and so far it has led to two employment opportunities with Food
          Ladder. There are opportunities to work with us around the world, if
          you’re interested please visit our Contact page.
        </p>

        <p>Q: Do you accept tax deductible donations?</p>

        <p>A: Absolutely, please visit our Support Us page.</p>
      </div>
    );
  }
}

export default Faq;
