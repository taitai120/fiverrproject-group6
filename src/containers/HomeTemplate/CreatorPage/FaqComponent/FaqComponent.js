import React from "react";
import "./FaqComponent.scss";
import { Collapse } from "antd";

const { Panel } = Collapse;

function FaqComponent() {
  return (
    <>
      <Collapse accordion>
        <Panel header="What is brand style guides?" key="1">
          <p>
            A brand style guide is a document for your brand which explains the
            brand's identity with present brand standards.
          </p>
        </Panel>
        <Panel header="What do i need to get started?" key="2">
          <p>
            Once you placed the order, there will be questions to ask about your
            company/business. Kindly Provide the correct information so we can
            get the exact design that you are looking for.
          </p>
        </Panel>
        <Panel header="Which package to choose?" key="3">
          <p>
            It depends on your needs, If you want a higher number of logo
            concepts at a more reasonable price, the Premium Package is the best
            option.
          </p>
        </Panel>
      </Collapse>
    </>
  );
}

export default FaqComponent;
