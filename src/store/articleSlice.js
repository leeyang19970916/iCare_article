import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";
import cloneDeep from "lodash.clonedeep";
// tags:[
//     {id:"",name:""}
// ],

let initArticle = {
  majTitle: "",
  minTitle: "",
  tags: [],
  id: "",
  content: "",
  date: "",
  category: [
    { id: 0.691816669949, name: "熱門文章" },
    { id: 0.69189995, name: "最新消息" },
  ],
  image: null,
  like: 15,
  share: 52,
  view: 86,
};
const articleSlice = createSlice({
  name: "article",
  initialState: initArticle,
  reducers: {
    changeImage(state, action) {
      console.log(action);
    },
    addTag(state, action) {
      let item = action.payload;
      state.tags.push(item);
      // console.log(action,"fuck")
    },
    removeTag(state, action) {
      let id = action.payload;
      state.tags = state.tags.filter((item) => item.id !== id);
    },
    majTitleHandler(state, action) {
      let value = action.payload;
      state.majTitle = value;
      console.log(action);
      return state;
    },
    minTitleHandler(state, action) {
      let value = action.payload;
      state.minTitle = value;
      console.log(action);
      return state;
    },
    contentHandler(state, action) {
      let value = action.payload;
      state.content = value;
      // 這是連原始碼一起帶過來的
      return state;
    },
    buildID(state, action) {
      state.id = action.payload;
    },
    buildDate(state, action) {
      state.date = action.payload;
    },
    imageHandler(state, action) {
      let img = action.payload;
      state.image = img;
    },
    resetState(state, action) {
      state = JSON.parse(JSON.stringify(initArticle));
      return state;
    },
    copyState(state, action) {
      let obj = action.payload;
      state = JSON.parse(JSON.stringify(obj));
      return state;
    },
  },
});
export const {
  copyState,
  imageHandler,
  buildDate,
  buildID,
  resetState,
  changeImage,
  addTag,
  removeTag,
  majTitleHandler,
  minTitleHandler,
  contentHandler,
} = articleSlice.actions;

export default articleSlice.reducer;
