import { createSlice } from "@reduxjs/toolkit";



const itemTypeSlice = createSlice({
    name: "item_type",
    initialState: {
        item_type: null,
    },
    reducers: {
        setItemType: (state, action) => {
            state.item_type = action.payload
        }
    }
})

//action creators
export const { setItemType } = itemTypeSlice.actions


//selectors
export const selectItemType = mainState => mainState.item_type?.item_type

export default itemTypeSlice.reducer    