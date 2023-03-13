import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addTagHandler } from "../../../../store/sortSlice";

const TableTags = (props) => {
    let { item, status } = props
    let sortSlice=useSelector(state=>state.sort)
    let dispatch=useDispatch()
    if (!item.length) {
        return
    }
    const addToSort = (e) => {
        let {tags}=sortSlice
        let isExisted=tags.findIndex(item=>item.id===e.id)  
        if (isExisted>=0) {
            return
        }else{
            dispatch(addTagHandler(e))
        }

    }
    if (status === "tags") {
        return (
            <div className="d-flex flex-wrap">
                {item.map(e => <div key={e.id} className="btn text-primary me-1 d-table" 
                onClick={()=>addToSort(e)}>#{e.name}</div>)}
            </div>
        )
    } else {
        return (
            <div>
                {item.map(e => <div key={e.id} className="btn  text-primary me-1 d-table"  
                onClick={()=>addToSort(e)}>{e.name}</div>)}
            </div>
        )

    }

}
export default TableTags