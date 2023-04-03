import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classNames from "classnames";
import { Link } from "gatsby";
import ActiveLink from "../activeLink";
import MobileSideBar from "./mobilesidebar";

import * as styles from "./styles.module.scss";
import Scrollspy from "react-scrollspy";

import { Mobile, NonMobile } from "../Breakpoints";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

  const [expanded, setExpanded] = useState(false);

  const routes = ["about", "projects", "education"];
  return (
    <>
    <NonMobile>
      <div className={styles.navBarContainer}>
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
    </NonMobile>
    <Mobile>
      <MobileSideBar expanded={expanded}></MobileSideBar>
      <button className={styles.hamburger} onClick={(event) => setExpanded(!expanded)}>
        <FontAwesomeIcon icon={faBars} size="2x" color="white"></FontAwesomeIcon>
      </button> 
    </Mobile>
    </>
  );
};

export default NavBar;
