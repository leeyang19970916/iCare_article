import { createSlice } from "@reduxjs/toolkit";
const initList = []
const listSlice = createSlice({
    name: "List",
    initialState: initList,
    reducers: {
        addList(state, action) {
            let item=action.payload
            state.push(item)
           
        },
        removeList(state, action) {
            let id=action.payload
            console.log(JSON.parse(JSON.stringify(state)),"qqqq")
            state=state.filter(item=>item.id!==id)
            console.log(JSON.parse(JSON.stringify(state)),"99999qqqqasdacfbhfgh")
            return state
        },
    }
})
export const { addList, removeList } = listSlice.actions

export default listSlice.reducer