import React from "react";
import PropTypes from "prop-types";
import "../../styles/styles.css";
import MainFooter from "../footer/MainFooter";
import Header from "../header/Header";

export default function Layout({
  children,
}) {
  return (
    <div className="flex min-h-screen main-bg layout-bg">      
      <div className="flex-1 ">
      <Header />
      <main className="mx-auto px-8 py-4">{children}</main>
        <MainFooter />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showCreatePostButton: PropTypes.bool,
  showHeader: PropTypes.bool,
  showNavbar: PropTypes.bool,
};

Layout.defaultProps = {
  showCreatePostButton: false,
  showHeader: true,
  showNavbar: true,
};
