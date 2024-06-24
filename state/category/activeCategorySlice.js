import { createSlice } from "@reduxjs/toolkit";

export const ITEM_TYPES = {
    type: "food_item",
  
}

const activeCategorySlice = createSlice({
    name: "active_category",
    initialState: {
        active_category: null,
    },
    reducers: {
        setActiveCategory: (state, action) => {
            state.active_category = action.payload
        }
    }
})

//action creators
export const { setActiveCategory } = activeCategorySlice.actions


//selectors

export const selectActiveCategory = mainState => mainState.active_category.active_category

export default activeCategorySlice.reducer    