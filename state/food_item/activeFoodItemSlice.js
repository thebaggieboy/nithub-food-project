import { createSlice } from "@reduxjs/toolkit";

export const ITEM_TYPES = {
    type: "food_item",
  
}

const activeItemSlice = createSlice({
    name: "active_item",
    initialState: {
        active_item: null,
    },
    reducers: {
        setActiveItem: (state, action) => {
            state.active_item = action.payload
        }
    }
})

//action creators
export const { setActiveItem, setActiveItemType } = activeItemSlice.actions


//selectors

export const selectActiveItem = mainState => mainState.active_item.active_item

export default activeItemSlice.reducer    