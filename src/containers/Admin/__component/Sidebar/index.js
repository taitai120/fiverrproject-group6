import { Layout, Menu, Button } from "antd";
import { Redirect } from "react-router";
import React from "react";
import "./style.css";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Category";
import AddIcon from "@mui/icons-material/Add";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

import { NavLink, BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../../Dashboard";
import User from "../../Users";
import Comment from "../../Comment";
import Job from "../../Job";

import AddUser from "../../Users/function/add";
import UpdateUser from "../../Users/function/update";

import AddJob from "../../Job/function/add";
import UpdateJob from "../../Job/function/update";

import AddComment from "../../Comment/function/add";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function SideBar(props) {
  const [state, setState] = useState({
    collapsed: false,
  });

  const logOutUserAdmin = () => {
    localStorage.removeItem("UserAdmin");
    localStorage.removeItem("exp");
    window.location.reload();
    <Redirect to="/auth" />;
  };

  const onCollapse = (collapsed) => {
    setState({ collapsed });
  };
  const { collapsed } = state;

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo p-2 flex justify-center">
            <a href="/#">
              <img src="/asset/img/logo-admin.png" alt="" />
            </a>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={props.path}>
            <Menu.Item key="1" icon={<DashboardIcon />}>
              <NavLink exact to="/dashboard">
                Dashboard
              </NavLink>
            </Menu.Item>

            <SubMenu key="sub1" icon={<AccountCircleIcon />} title="User">
              <Menu.Item key="2" icon={<PeopleIcon />}>
                <NavLink to="/dashboard/user">List User</NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<PersonAddIcon />}>
                <NavLink activeClassName="active" to="/dashboard/adduser">
                  Add User
                </NavLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<CategoryIcon />} title="Job">
              <Menu.Item key="5" icon={<CategoryIcon />}>
                <NavLink to="/dashboard/job">List Job</NavLink>
              </Menu.Item>
              <Menu.Item key="6" icon={<AddIcon />}>
                <NavLink to="/dashboard/addjob">Add Job</NavLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub3"
              icon={<MiscellaneousServicesIcon />}
              title="Comment"
            >
              <Menu.Item key="8" icon={<MiscellaneousServicesIcon />}>
                <NavLink to="/dashboard/comment">List Comment</NavLink>
              </Menu.Item>
              <Menu.Item key="9" icon={<AddIcon />}>
                <NavLink to="/dashboard/addcomment">Add Comment</NavLink>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background pt-2  bg-pink-800  "
            style={{ padding: 0 }}
          >
            <div className="flex justify-between">
              <div></div>
              <div className="flex mx-6 ">
                <div className="cursor-pointer text-red-500 hover:text-red-700 flex items-center">
                  <Button
                    onClick={() => {
                      logOutUserAdmin();
                    }}
                    type="primary"
                  >
                    Đăng Xuất
                  </Button>
                </div>
              </div>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/user" component={User} />
            <Route exact path="/dashboard/adduser" component={AddUser} />
            <Route
              exact
              path="/dashboard/updateuser/:id"
              component={UpdateUser}
            />
            <Route exact path="/dashboard/job" component={Job} />
            <Route exact path="/dashboard/addjob" component={AddJob} />
            <Route
              exact
              path="/dashboard/updatejob/:id"
              component={UpdateJob}
            />
            <Route exact path="/dashboard/comment" component={Comment} />
            <Route exact path="/dashboard/addcomment" component={AddComment} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Design ©2021 Created by Admin
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
