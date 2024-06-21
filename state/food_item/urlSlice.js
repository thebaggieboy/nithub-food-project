import { createSlice } from "@reduxjs/toolkit";

export const ITEM_TYPES = {
    type: "url",
  
}

const itemUrlSlice = createSlice({
    name: "item_url",
    initialState: {
        item_url: 'https://food-price-dashboard-be.onrender.com/nbs/mom-percentage/?food_item=oil&item_type=vegetable&category=1000%20ml&year=2024',
    },
    reducers: {
        setItemUrl: (state, action) => {
            state.item_url = action.payload
        }
    }
})

//action creators
export const { setItemUrl } = itemUrlSlice.actions


//selectors

export const selectItemUrl = mainState => mainState.item_url?.item_url

export default itemUrlSlice.reducer    