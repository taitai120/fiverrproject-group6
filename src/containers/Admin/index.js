import React from "react";
import { Route, Redirect } from "react-router-dom";
import SideBar from "./__component/Sidebar";

function LayoutAdmin(props) {
  return (
    <>
      <SideBar />
      {props.children}
    </>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsRoute) => {
        // Nhớ thêm if check đăng nhập admin
        if (localStorage.getItem("UserAdmin")) {
          return (
            <LayoutAdmin>
              <Component {...propsRoute} />
            </LayoutAdmin>
          );
        }
        return <Redirect to="/auth" />;
      }}
    />
  );
}
