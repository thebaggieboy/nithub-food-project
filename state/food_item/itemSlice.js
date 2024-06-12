import { createSlice } from "@reduxjs/toolkit";

export const ITEM_TYPES = {
    type: "food_item",
  
}

const itemSlice = createSlice({
    name: "item",
    initialState: {
        item: null,
    },
    reducers: {
        setItem: (state, action) => {
            state.item = action.payload
        }
    }
})

//action creators
export const { setItem, setItemType } = itemSlice.actions


//selectors

export const selectItem = mainState => mainState.item.item

export default itemSlice.reducer    