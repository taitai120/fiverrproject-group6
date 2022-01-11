import React from "react";
import "./BreadcrumbComponent.scss";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

function BreadcrumbComponent() {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to="/">Graphics & Design</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/">Brand Style Guides</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}

export default BreadcrumbComponent;
