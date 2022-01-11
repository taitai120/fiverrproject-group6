import React from "react";
import "./TabsComponent.scss";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { actBuyJob } from "../../../../redux/actions/UserAuthActions";

const { TabPane } = Tabs;

function TabsComponent({ cost, id }) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.UserAuthReducer);

  const user = JSON.parse(localStorage.getItem("User"));

  const packages = [
    {
      package: "BASIC Package - Popular",
      price: cost,
      content:
        "3 Awesome Logo + Free Revisions + HD JPG and Transparent PNG + Vector Files -No Mascot design",
    },
    {
      package: "STANDARD Package - Recommended",
      price: cost * 1.5,
      content:
        "5 ULTRA HQ logos + Free Revisions + Vector Source files(Ai, EPS, PDF) for final design",
    },
    {
      package: "PREMIUM Branding - Must for PRO",
      price: cost * 2,
      content:
        "5 PREMIUM Designs + Free Revisions + Full Stationery + Social Media Kit + Vector Files + Copyrights",
    },
  ];

  const handleBuyPackage = () => {
    if (!user) {
      alert("Please log in before continue");
    } else {
      dispatch(actBuyJob(id, user));
    }
  };

  const renderTabContent = (item) => {
    return (
      <div className="tabscomponent__package">
        <div className="package__heading">
          <h3>{item.package}</h3>
          <p>US${item.price}</p>
        </div>
        <div className="package__body">
          <p>{item.content}</p>
        </div>
        <div className="package__footer">
          <div className="package__delivery">
            <span
              class="lFICM06 delivery-icon"
              aria-hidden="true"
              style={{ width: "16px", height: "16px" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                <path d="M9 4H7v5h5V7H9V4z"></path>
              </svg>
            </span>
            <p>2 Days Delivery</p>
          </div>
          <div className="package__revisions">
            <span
              class="lFICM06 revisions-icon"
              aria-hidden="true"
              style={{ width: "16px", height: "16px" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
              </svg>
            </span>
            <p>Unlimited Revisions</p>
          </div>
        </div>
        <button onClick={() => handleBuyPackage()}>
          Continue (${item.price})
        </button>
      </div>
    );
  };

  return (
    <div className="tabscomponent__container">
      <Tabs defaultActiveKey="1" type="card" size="large">
        <TabPane tab="Basic" key="1">
          {renderTabContent(packages[0])}
        </TabPane>
        <TabPane tab="Standard" key="2">
          {renderTabContent(packages[1])}
        </TabPane>
        <TabPane tab="Premium" key="3">
          {renderTabContent(packages[2])}
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabsComponent;
