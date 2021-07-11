import React from "react";
import NavBar from "../navbar";
import * as styles from "./styles.module.scss";

const Page = (props) => {
  const {children} = props;
  return (
    <div className={styles.container}>
      <div className={styles.navBarContainer}>
        <NavBar></NavBar>
      </div>
      <div className={styles.contentContainer}> 
        {children}
      </div>
    </div>
  )
}
export default Page;