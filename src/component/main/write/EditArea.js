import React, { useState, useEffect, useRef } from "react";
import { CKEditor } from "ckeditor4-react";
import Offcanvas from "./offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { contentHandler } from "../../../store/articleSlice";

function EditArea(props) {
  let dispatch = useDispatch();
  let ckHeightRef = useRef();
  let editorRef = useRef();
  // const [content, setContent] = useState("");
  const [writeHeight, setWriteHeight] = useState(500);
  const styles = {
    width: "90%",
  };
  const contentInputHandler = (evt) => {
    let value = evt.editor.getData();
    dispatch(contentHandler(value));
  };
  let content = useSelector((state) => state.article.content);
  console.log(content, "cccccc");
  // useEffect(() => {
  //   if (editorRef.current) {
  //     editorRef.current.editor.setData(content);
  //   }
  // }, [content]);
  //   let { article } = props;
  //   console.log(props.article, "arrrrr", article.content);
  //   if (article) {
  //     return (
  //       <div ref={ckHeightRef} className="ckeditor-parent h-100" style={styles}>
  //         <CKEditor
  //           initData="<p>Hello from CKEditor 4!</p>"
  //           data={article.content}

  //           onChange={contentInputHandler}
  //           config={{
  //             extraPlugins: "colorbutton",
  //             height: `${writeHeight}px`,
  //             skin: "kama", //樣式
  //             tabSpaces: 4,
  //             toolbar: "Basic",
  //             applicationTitle: "My WYSIWYG", //title
  //             undoStackSize: 50, //記憶體上限
  //             // autoEmbed_widget : 'embedSemantic', //不知道
  //             // autoGrow_bottomSpace:50,
  //             // uiColor : '#AADC6E' toolbar顏色
  //             // bodyClass:"contents",
  //             editorplaceholder: "Type your comment…",
  //           }}
  //         />
  //         <Offcanvas></Offcanvas>
  //       </div>
  //     );
  //   }
  return (
    <div ref={ckHeightRef} className="ckeditor-parent h-100" style={styles}>
      <CKEditor
        // ref={editorRef}
        data={content}
        onChange={contentInputHandler}
        config={{
          extraPlugins: "colorbutton",
          height: `${writeHeight}px`,
          skin: "kama", //樣式
          tabSpaces: 4,
          toolbar: "Basic",
          applicationTitle: "My WYSIWYG", //title
          undoStackSize: 50, //記憶體上限
          // autoEmbed_widget : 'embedSemantic', //不知道
          // autoGrow_bottomSpace:50,
          // uiColor : '#AADC6E' toolbar顏色
          // bodyClass:"contents",
          editorplaceholder: "Type your comment…",
        }}
      />
    </div>
  );
}

export default EditArea;
