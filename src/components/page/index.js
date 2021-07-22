import React from "react";
import NavBar from "../navbar";
import * as styles from "./styles.module.scss";
import { NonMobile, Mobile } from "../Breakpoints";
import classNames from "classnames";

const Page = (props) => {
  const {children} = props;
  return (
    <div className={styles.container}>
      <NonMobile>
        <div className={styles.navBarContainer}>
        <NavBar></NavBar>
      </div>
      <div className={styles.contentContainer}> 
        {children}
      </div>
      </NonMobile>
      <Mobile>
        <NavBar></NavBar>
        <div className={classNames(styles.contentContainer, styles.mobile)}> 
        {children}
      </div>
      </Mobile>
    </div>
  )
}
export default Page;