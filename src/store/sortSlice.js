import { createSlice } from "@reduxjs/toolkit";
const initSort = {
    tags:[],
    title:"",
    category:[],
    date:""

}
const sortSlice = createSlice({
    name: "sort",
    initialState: initSort,
    // 文章搜尋欄位
    reducers: {
        setTitleHandler(state,action){
            let item=action.payload
            state.title=item
            console.log(action.payload,"settitleHandler")

        },
        addTagHandler(state,action){
            let item=action.payload
            state.tags.push(item)
            console.log(action.payload,"settitleHandler")

        },
        removeTagHandler(state,action){
            
            let id=action.payload
            state.tags=state.tags.filter(item=>item.id!==id)
            

        }
    }
})
export const {setTitleHandler, addTagHandler,removeTagHandler } = sortSlice.actions

export default sortSlice.reducer