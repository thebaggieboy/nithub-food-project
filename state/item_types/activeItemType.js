import { createSlice } from "@reduxjs/toolkit";

export const ITEM_TYPES = {
    type: "food_item",
  
}

const activeItemTypeSlice = createSlice({
    name: "active_item_type",
    initialState: {
        active_item_type: null,
    },
    reducers: {
        setActiveItemType: (state, action) => {
            state.active_item_type = action.payload
        }
    }
})

//action creators
export const { setActiveItemType } = activeItemTypeSlice.actions


//selectors

export const selectActiveItemType = mainState => mainState.active_item_type?.active_item_type

export default activeItemTypeSlice.reducer    