import React, { useState, useEffect, useRef } from 'react';
import { CKEditor } from 'ckeditor4-react';
import Offcanvas from './offcanvas';
import { useSelector, useDispatch } from 'react-redux';
import { contentHandler } from "../../../store/articleSlice"

function CKEditorUI() {
    let dispatch = useDispatch()
    let ckHeightRef = useRef()
    const [content, setContent] = useState('');
    const [writeHeight, setWriteHeight] = useState(500);
    // console.log("幾次")
    const styles = {
        width: "90%",
        // height: "300px",
    };
    // useEffect(() => {
    //     let ckHeight = ckHeightRef.current.getBoundingClientRect().height;

    //     let newHeight = ckHeight * 0.75;
    //     setWriteHeight(newHeight);
    //     return () => {

    //     };
    // }, []);

    const contentInputHandler = (evt) => {
        let value = evt.editor.getData()
        dispatch(contentHandler(value))
    }
    return (
        <div ref={ckHeightRef} className='ckeditor-parent h-100' style={styles}>
            <CKEditor
                data={content}
                onChange={contentInputHandler}
                config={{
                    extraPlugins: 'colorbutton',
                    height: `${writeHeight}px`,
                    skin: 'kama', //樣式
                    tabSpaces: 4,
                    toolbar: "Basic",
                    applicationTitle: 'My WYSIWYG', //title
                    undoStackSize: 50, //記憶體上限
                    // autoEmbed_widget : 'embedSemantic', //不知道
                    // autoGrow_bottomSpace:50,
                    // uiColor : '#AADC6E' toolbar顏色
                    // bodyClass:"contents",
                    editorplaceholder: 'Type your comment…',
                }}

            // colorButton_colors='00923E,F8C100,28166F'

            // style={{ borderColor: 'blue' }}
            />
            <Offcanvas></Offcanvas>
        </div>
    );
}

export default CKEditorUI;
