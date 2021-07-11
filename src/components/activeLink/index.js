import * as styles from "./styles.module.scss";
import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import PropTypes from "prop-types";

const ActiveLink = (props) => {
  const { to, children, disable } = props;
  return (
    <div className={classNames(styles.linkContainer)}>
      <Link
        to={to}
        className={classNames(styles.link, disable ? styles.disabled : "")}
        activeClassName={classNames(styles.active)}
        disabled={disable}
      >
        {children}
      </Link>
    </div>
  );
};

ActiveLink.propTypes = {
  to: PropTypes.string,
  disable: PropTypes.bool,
};

ActiveLink.defaultProps = {
  disable: false,
}

export default ActiveLink;
