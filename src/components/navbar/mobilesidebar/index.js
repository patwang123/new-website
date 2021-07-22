import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classNames from "classnames";
import { Link } from "gatsby";
import ActiveLink from "../../activeLink";

import * as styles from "./styles.module.scss";
import Scrollspy from "react-scrollspy";

const MobileSideBar = (props) => {

  const { expanded } = props;

  const routes = ["about", "experience", "projects", "education"];
  return (
    <>
      <div className={classNames(styles.overlay, "overlay", expanded ? styles.expanded : "")}></div>
      <div className={classNames(styles.navBarContainer, expanded ? styles.expanded : "")}>
      <div>
        <div className={styles.section}>
          {window.location.pathname === "/" ? (
            <>
              <div className={styles.linkHeader}>Home</div>
              <hr />
              <Scrollspy items={routes} currentClassName={styles.activeLink} style={{padding: 0, margin: 0}}>
                {routes.map((route) => {
                  return (
                      <ActiveLink
                        scroll={route}
                        className={styles.link}
                        key={route}
                      >
                        {route}
                      </ActiveLink>
                  );
                })}
              </Scrollspy>
            </>
          ) : (
            <ActiveLink
              to="/"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Home
            </ActiveLink>
          )}
        </div>

        <div className={styles.section}>
          <div className={styles.linkHeader}>Teaching</div>
          <hr />
          <ActiveLink
            to="/cs61a"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            CS 61A
          </ActiveLink>
        </div>
      </div>
      </div>
      </>
  );
};

export default MobileSideBar;
