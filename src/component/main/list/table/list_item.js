import React from "react"
// import { Route, NavLink } from "react-router-dom"
import TableTitle from "./tableTitle"
import TableTags from "./tableTags"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { removeList } from "../../../../store/listSlice"
import { useDispatch } from "react-redux";
import Image from 'react-bootstrap/Image';

const imgStyles={
    maxWidth:"150px"
}
const ListItem = (props) => {
    let { item } = props
    let dispatch=useDispatch()
    console.log(item,"item")
    let { majTitle, minTitle, date, id, like, view, share, tags,image } = item
    let TITLE = {
        majTitle, minTitle, date,id
    }
    const previewPagesHandler=()=>{
        dispatch(removeList(id))
    }
    const editPagesHandler=()=>{
        dispatch(removeList(id))
    }
    const removePagesHandler=()=>{
        console.log("qqq")
        dispatch(removeList(id))
    }
    return (
        <tr>
            <th scope="row">
                <div className="form-check d-flex justify-content-center">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>
            </th>
            <td>
            <Image src={image} alt="Random image" style={imgStyles} />
            </td>
            <td className="tableTitle pe-4"><TableTitle item={TITLE} /></td>
            <td >{tags && <TableTags status={"tags"} item={tags}></TableTags>}</td>
            {/* <td >{category && <TableTags status={"category"} item={category}></TableTags>}</td> */}
            <td>{view}</td>
            <td>{like}</td>
            <td>{share}</td>
            <td className="text-center">
                <div className="btn-group table-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={previewPagesHandler}>預覽頁面</a></li>
                        <li><a className="dropdown-item" href="#" onClick={editPagesHandler}>編輯內文</a></li>
                        <li><a className="dropdown-item" href="#" >編輯紀錄</a></li>
                        <li><a className="dropdown-item" href="#" onClick={removePagesHandler}>刪除文章</a></li>
                        <li><a className="dropdown-item" href="#">下載文章</a></li>

                    </ul>
                </div>
            </td>
        </tr>
    )
}
export default ListItem