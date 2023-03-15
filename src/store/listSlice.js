import { createSlice } from "@reduxjs/toolkit";
const initList = [
  {
    majTitle: "範例大標題",
    minTitle: "範例小標題",
    tags: [
      { id: 1, name: "胃痛" },
      { id: 3, name: "頭痛" },
    ],
    id: "wefrqweterterwter",
    content: "內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文",
    date: "2022/3/15",
    category: [
      { id: 0.691816669949, name: "熱門文章" },
      { id: 0.69189995, name: "最新消息" },
    ],
    image:null,
    like: 15,
    share: 52,
    view: 86,
  },
];
const listSlice = createSlice({
  name: "List",
  initialState: initList,
  reducers: {
    addList(state, action) {
      let item = action.payload;
      state.push(item);
    },
    removeList(state, action) {
      let id = action.payload;
      console.log(JSON.parse(JSON.stringify(state)), "qqqq");
      state = state.filter((item) => item.id !== id);
      console.log(JSON.parse(JSON.stringify(state)), "99999qqqqasdacfbhfgh");
      return state;
    },
  },
});
export const { addList, removeList } = listSlice.actions;

export default listSlice.reducer;
