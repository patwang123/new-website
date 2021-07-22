import classNames from "classnames";
import { isNullableType } from "graphql";
import React from "react";
import * as styles from "./styles.module.scss";
import propTypes from "prop-types";

const Card = (props) => {
  const { className, children, title, description, image, href } = props;
  return (
    <div className={classNames("card", styles.card, className)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {image != null ? <div className={styles.image}>{image}</div> : null}
      <div>
        <a className={styles.link} href={href.url}>
          {href.name}
        </a>
      </div>
    </div>
  );
};

export default Card;
