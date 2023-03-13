import React, { Fragment, useEffect, useState } from "react";
import { Route, NavLink } from "react-router-dom";
import ListItem from "./list_item";
import Pages from "./pages";
import "../../../../scss/list/table-border.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";

const filterTagsHandler = (data, tagArray) => {
    if (!tagArray) {
        return
    }
    data.forEach(e => {
 
        e.tags.forEach(tag=>{
            console.log( tag," e.tags")
            tagArray.forEach(sortTag=>{
                console.log( sortTag,"sortTag")
                if (tag.name===sortTag.name) {
                    return
                }
            })
        })
        // e.tags=""
    });
    // console.log(data,"data",tagArray,"tagArray")
    // data.filter(item => {
    //     item.tags.filter(item1 => {
    //         let aaa = tagArray.some(item2 => item1.id === item2.id && item1.name === item2.name)
    //         console.log("tagssssss", aaa)
    //     })
    // })
    return
}
const Table = () => {
    // map打listItem渲染出來
    let listSlice = useSelector((state) => state.list);
    let sortSlice = useSelector((state) => state.sort);
    const [listUI, setListUI] = useState(listSlice);
    const [isChecked, setIsChecked] = useState(false);
    useEffect(() => {
        let titleFilter = sortSlice.title.toLowerCase();
        let tagsFilter = sortSlice.tags;
        let newListSlice = "";
        if (titleFilter || tagsFilter) {
            newListSlice = listSlice.filter(
                (item) =>
                    item.majTitle.toLowerCase().includes(titleFilter) ||
                    item.minTitle.toLowerCase().includes(titleFilter)
            );
            // let a=filterTagsHandler(newListSlice,tagsFilter)
            // 這邊要串API不用自己寫以上
            setListUI(newListSlice);
        }

    }, [sortSlice.title, sortSlice.tags]);
    return (
        <Fragment>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col" style={{ width: "1%" }}>
                            <div className="form-check d-flex justify-content-center">
                                <input onChange={() => setIsChecked(!isChecked)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                            預覽圖
                        </th>
                        <th scope="col" style={{ width: "20%" }} className="tableTitle">
                            標題
                        </th>
                        <th scope="col" style={{ width: "10%" }}>
                            標籤
                        </th>
                        {/* <th scope="col" style={{ width: "10%" }}>
                            分類
                        </th> */}
                        <th scope="col" style={{ width: "1%" }}>
                            <FontAwesomeIcon icon="fa-regular fa-eye" />
                        </th>
                        <th scope="col" style={{ width: "1%" }}>
                            <FontAwesomeIcon icon="fa-regular fa-bookmark" />{" "}
                        </th>
                        <th scope="col" style={{ width: "1%" }}>
                            <FontAwesomeIcon icon="fa-solid fa-share-nodes" />{" "}
                        </th>
                        <th scope="col" style={{ width: "1%" }}></th>
                    </tr>
                </thead>
                <tbody>
                    {listUI.map((item) => (
                        <ListItem key={item.id} item={item}></ListItem>
                    ))}
                </tbody>
            </table>
            <Pages></Pages>
        </Fragment>
    );
};
export default Table;
