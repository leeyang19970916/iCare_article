import { CKEditor } from "ckeditor4-react";
import React, { Component, Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../scss/write/_offcanvas.scss";
const WriteSetting = () => {
  const [activeOffcanvas, setActiveOffcanvas] = useState(null);

  const handleOffcanvasOpen = (offcanvasId) => {
    if (activeOffcanvas===offcanvasId) {
      setActiveOffcanvas(null);
      return
    }
    setActiveOffcanvas(offcanvasId);
  };
  return (
    <Fragment>
      <div
        className="bg-white d-flex align-items-center flex-column pt-5 offcanvas-component "
        style={{ width: "10%" }}
      >
        <div
          // className="btn text-secondary fw-bolder text-center py-3"
          className={`btn text-secondary fw-bolder text-center py-3 ${
            activeOffcanvas === "basicSetting" ? "active" : ""
          }`}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBasicSetting"
          aria-controls="offcanvasBasicSetting"
          onClick={() => handleOffcanvasOpen("basicSetting")}
        >
          <div className="fs-4">
            <FontAwesomeIcon icon="fa-solid fa-gear" />
          </div>
          <div>基本設定</div>
        </div>
        <div
          // className="btn text-secondary fw-bolder text-center py-3 mt-3"
          className={`btn text-secondary fw-bolder text-center py-3 mt-3 ${
            activeOffcanvas === "tagCategory" ? "active" : ""
          }`}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTagsSetting"
          aria-controls="offcanvasTagsSetting"
          onClick={() => handleOffcanvasOpen("tagCategory")}
        >
          <div className="fs-4">
            <FontAwesomeIcon icon="fa-solid fa-tags" />
          </div>
          <div>標籤類別</div>
        </div>
      </div>
    </Fragment>
  );
};
export default WriteSetting;
