import React, { Fragment, useState, useRef, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SortTagsBtn from "./sort_tagsBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  addTagHandler,
  removeTagHandler,
  setTitleHandler,
} from "../../../../store/sortSlice";
// const initTagsArray = [{ id: "q1", name: "癌症" }, { id: "q22", name: "高血壓" }, { id: "88ffff", name: "飲食" }, { id: "q1rrrr", name: "體重" },]
const Sort = () => {
  let sortSlice = useSelector((state) => state.sort);
  const [sortTitle, setSortTitle] = useState("");
  let dispatch = useDispatch();
  const tagRef = useRef();
  const removeTagSortHandler = (item) => {
    let { id } = item;
    console.log(id, "iddd");
    if (!id) {
      return;
    }
    dispatch(removeTagHandler(id));
  };
  const addTagInSortHandler = () => {
    let value = tagRef.current.value.trim();
    if (!value) {
      return;
    }
    let {tags}=sortSlice
    const isRepeat = tags.find((item) => item.name === value);
    // console.log(sortSlice,"sortSlice")
    if (isRepeat) {
      console.log("重複的標籤名稱");
      return;
    }
    let tag = {
      id: Math.random(),
      name: tagRef.current.value,
    };
    // setTagsArray([...tagsArray, tag])
    dispatch(addTagHandler(tag));
    tagRef.current.value = "";
  };
  const titleHandler = (e) => {
    // setSortTitle(e.target.value)
    dispatch(setTitleHandler(e.target.value));
  };

  return (
    <div className="bg-white my-2 sort py-2 px-3">
      <section className="px-2">
        <div className="d-flex align-items-center mb-3">
          <div className="fw-bolder text-primary" style={{ width: "20%" }}>
            搜尋文章
          </div>
          <div className="input-group">
            <input
              value={sortSlice.title}
              onChange={titleHandler}
              type="text"
              className="form-control"
              placeholder="請輸入標題"
              aria-label="請輸入標題"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="fw-bolder text-primary" style={{ width: "20%" }}>
            搜尋標籤
          </div>
          <div className="input-group ">
            <input
              ref={tagRef}
              type="text"
              className="form-control"
              placeholder="請輸入 #hashtag"
              aria-label="請輸入 #hashtag"
              aria-describedby="basic-addon1"
            />
            <button
              type="button"
              onClick={addTagInSortHandler}
              className="btn btn-primary"
            >
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </button>
          </div>
        </div>
        <div>
          {sortSlice.tags.map((item) => (
            <SortTagsBtn
              key={item.id}
              status={"sort"}
              removeTag={removeTagSortHandler}
              item={item}
            ></SortTagsBtn>
          ))}
        </div>
      </section>

      <section className="px-2">
        {/* <div className="d-flex align-items-center mb-3">
                    <div className="fw-bolder text-primary" style={{ width: "20%" }}>主分類</div>
                    <select className="form-select" aria-label="Default select example">
                        <option >熱門文章</option>
                        <option >One</option>
                        <option >Two</option>
                        <option >Three</option>
                    </select>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="fw-bolder text-primary" style={{ width: "20%" }}>次分類</div>
                    <select className="form-select" aria-label="Default select example">
                        <option >飲食習慣</option>
                        <option  >One</option>
                        <option >Two</option>
                        <option >Three</option>
                    </select>
                </div> */}
        <div className="d-flex align-items-center mb-3">
          <div className="fw-bolder text-primary" style={{ width: "20%" }}>
            發佈時間
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="2023/02/07"
              aria-label="Username"
            />
            <div className="px-2 d-flex align-items-center">~</div>
            <input
              type="text"
              className="form-control"
              placeholder="2023/06/07"
              aria-label="Server"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Sort;
