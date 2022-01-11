import React from "react";
import { Result, Button } from "antd";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";

export default function PageNotFound() {
  const history = useHistory();
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => history.push("/")}>
            Back Home
          </Button>
        }
      />
      ,
    </div>
  );
}
