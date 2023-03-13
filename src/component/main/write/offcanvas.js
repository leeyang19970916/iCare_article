import React, { Component, Fragment, useState, useRef } from "react"
import SortTagsBtn from "../list/filter/sort_tagsBtn";
import "../../../scss/list/_sort.scss";
import { useSelector, useDispatch } from 'react-redux';
import "../../../scss/list/_image.scss"
import { addTag, majTitleHandler, minTitleHandler, removeTag } from "../../../store/articleSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
    margin: "0 0 0 auto",
    color: 'white !important'
}
// export const uploadImage = createAsyncThunk(
//     'uploadImage',
//     async (image, { rejectWithValue }) => {
//       // Upload image to server or cloud
//       // ...
//       return image;
//     }
//   );
const Offcanvas = () => {
    const dispatch = useDispatch();
    const tagsArray = useSelector(state => state.article.tags)
    let tagInputRef = useRef()
    const [fileSrc, setFileSrc] = useState(null);
    const addTagsHandler = () => {
        let value = tagInputRef.current.value.trim();
        if (!value) {
            return
        }
        let tag = {
            id: Math.random(),
            name: tagInputRef.current.value
        }
        dispatch(addTag(tag))
        tagInputRef.current.value = ""
    }
    const removeTagHandler = (item) => {
        let { id } = item
        dispatch(removeTag(id))

    }
    const majTitleInputHandler = (e) => {
        let value = e.target.value
        dispatch(majTitleHandler(value))
    }
    const minTitleInputHandler = (e) => {
        let value = e.target.value
        dispatch(minTitleHandler(value))
    }
    const handleFileChange = (event) => {
        // https://penueling.com/%E7%B7%9A%E4%B8%8A%E5%AD%B8%E7%BF%92/react%E5%AF%A6%E4%BD%9C%E4%B8%8A%E5%82%B3%E6%AA%94%E6%A1%88%E9%A0%90%E8%A6%BD%E5%9C%96%E7%89%87/
        // https://www.returnmain.com/articles/8
        if (!event.target.files[0]) return;
        const reader = new FileReader();
        reader.onload = () => {
            setFileSrc(reader.result);
            // console.log(e.target.result, "e.target.result")
            //   setPreviewImage(e.target.result);
        };
        reader?.readAsDataURL(event?.target?.files[0]);
        event.target.value = "";
    };
    return (<Fragment>
        <div className="offcanvas offcanvas-start h-100 bg-dark text-white" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasBasicSetting" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header " style={styles}>
                <button type="button" className="btn-close  text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                    <div className="text-white fw-bolder pb-3">預覽圖片設定</div>
                    <div className="w-100">
                        <div id="box" className="d-flex flex-column">
                            <label for="file">
                                <FontAwesomeIcon className="fs-2 mb-1" icon="fas fa-cloud-upload-alt" />
                                <input type="file" value="" accept="image/*" onChange={handleFileChange} id="file" />上傳圖片</label>
                            <div id="progress"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-white fw-bolder py-3 pt-4">標題設定</div>
                    <div>
                        <div className="input-group mb-3 ">
                            <input type="text" onChange={majTitleInputHandler} className="form-control" placeholder="主標題" aria-label="Username" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" onChange={minTitleInputHandler} className="form-control" placeholder="副標題" aria-label="Username" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="offcanvas offcanvas-start h-100 bg-dark text-white" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasTagsSetting" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header " style={styles}>
                <button type="button" className="btn-close  text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                    <div className="text-white fw-bolder pb-3">現有分類</div>
                    <div>
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control" placeholder="選擇主分類" aria-label="選擇主分類" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="選擇次分類" aria-label="選擇次分類" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-white fw-bolder  py-3 pt-5">現有標籤</div>
                    <div className="input-group mb-3">
                        <input ref={tagInputRef} type="text" className="form-control" placeholder="請輸入新標籤" aria-label="請輸入新標籤" />

                    </div>
                    <button type="button" className="btn btn-primary w-100 mb-3" onClick={addTagsHandler}>新增標籤</button>
                    {tagsArray && tagsArray.map(item => <SortTagsBtn key={item.id} removeTag={removeTagHandler} status={"offcanvas"} item={item}></SortTagsBtn>)}
                </div>
            </div>
        </div>


    </Fragment>
    )
}
export default Offcanvas