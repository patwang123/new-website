import classNames from "classnames";
import { isNullableType } from "graphql";
import React from "react";
import * as styles from "./styles.module.scss";
import propTypes from "prop-types";

const Card = (props) => {
  const { className, children, title, description, image, href } = props;
  return (
    <div className={classNames("card", styles.card, className)}>
      {title != null ? <div className={styles.title}>{title}</div> : null}
      {description != null ? <div className={styles.description}>{description}</div> : null}
      {image != null ? <div className={styles.image}>{image}</div> : null}
      {href != null ? (
        <div>
          <a className={styles.link} href={href.url} target="_blank" rel="noreferrer">
            {href.name}
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
