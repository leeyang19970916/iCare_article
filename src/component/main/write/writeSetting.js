import { CKEditor } from "ckeditor4-react";
import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WriteSetting = () => {
  return (
    <Fragment>
      <div
        className="bg-white d-flex align-items-center flex-column pt-5 "
        style={{ width: "10%" }}
      >
        <div
          className="btn text-secondary fw-bolder text-center py-3"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBasicSetting"
          aria-controls="offcanvasBasicSetting"
        >
          <div className="fs-4">
            <FontAwesomeIcon icon="fa-solid fa-gear" />
          </div>
          <div>基本設定</div>
        </div>
        <div
          className="btn text-secondary fw-bolder text-center py-3 mt-3"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTagsSetting"
          aria-controls="offcanvasTagsSetting"
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
