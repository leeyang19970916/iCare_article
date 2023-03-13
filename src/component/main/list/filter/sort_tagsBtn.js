import React, { Fragment } from "react";
import { Route, NavLink } from "react-router-dom";
const SortTagsBtn = (props) => {
  let { item, status } = props;
  const removeTagHandler = () => {
    props.removeTag(item);
  };
  if (status === "offcanvas") {
    return (
      <Fragment>
        <button
          type="button"
          className="btn btn-primary px-2 py-0 me-3  mb-3 tag-btn"
        >
          {item.name}{" "}
          <a href="#" className="text-secondary" onClick={removeTagHandler}>
            x
          </a>
        </button>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <button
          type="button"
          className="btn btn-primary px-2 py-1 me-3 mb-3 tag-btn"
        >
          {item.name}{" "}
          <a href="#" className="text-secondary" onClick={removeTagHandler}>
            x
          </a>
        </button>
      </Fragment>
    );
  }
};
export default SortTagsBtn;
