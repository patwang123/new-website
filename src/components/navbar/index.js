import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classNames from "classnames";
import { Link } from "gatsby";
import ActiveLink from "../activeLink";

import * as styles from "./styles.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div>
        <div className={styles.section}>
          <ActiveLink to="/">Home</ActiveLink>
          <hr/>
          <ActiveLink to="/">About me</ActiveLink>
          <ActiveLink to="/test">Projects</ActiveLink>
          <ActiveLink to="/test">Experience</ActiveLink>
          <ActiveLink to="/test">Education</ActiveLink>
        </div>
        
        <div className={styles.section}>
          <ActiveLink to="/" disable> Teaching </ActiveLink>
          <hr/>
          <ActiveLink to="/cs61a">CS 61A</ActiveLink>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
