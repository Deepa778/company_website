import React from "react";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import UserFooter from "./footer/UserFooter";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;

import MainHeaders from "./header";

const UserLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <div>
      <Layout>
        <Header className="!sticky !top-0" style={{ zIndex: 999 }}>
          <MainHeaders />
        </Header>
        <Content
          style={{
            // padding: "0  48px",
            // padding:"0px 48px 0px 0px"
          }}
        >
          
          <Layout
            style={{
              // padding: " 0px",
              paddingTop:"0px",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Content
              style={{
                padding: "0px",
                minHeight: 280,
              }}
            >
              <div>
                <Outlet />
              </div>
            </Content>
          </Layout>
        </Content>
        <UserFooter />

       
      </Layout>
      </div>
    </div>
  );
};

export default UserLayout;
