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
          {window.location.pathname === "/" ? (
            <>
              <hr />
              <ActiveLink scroll="about">About</ActiveLink>
              <ActiveLink scroll="projects">Projects</ActiveLink>
              <ActiveLink scroll="experience">Experience</ActiveLink>
              <ActiveLink scroll="education">Education</ActiveLink>
            </>
          ) : null}
        </div>

        <div className={styles.section}>
          <ActiveLink disable> Teaching </ActiveLink>
          <hr />
          <ActiveLink to="/cs61a">CS 61A</ActiveLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
