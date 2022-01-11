import React, { useState } from "react";
import { Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const HomeTemplate = (props) => {
  const { exact, path, Component } = props;

  const LayoutHome = (props) => {
    return (
      <>
        <Header exact={exact} />
        {props.children}
        <Footer />
      </>
    );
  };

  return (
    // <Route
    //   {...restProps}
    //   render={(propsRoute) => {
    //     return (
    //       <>
    //         <Header />
    //         <Component {...propsRoute} />
    //         <Footer />
    //       </>
    //     );
    //   }}
    // ></Route>
    <LayoutHome>
      <Route exact={exact} path={path} component={Component}></Route>
    </LayoutHome>
  );
};

export default HomeTemplate;
