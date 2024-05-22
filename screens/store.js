import { createSlice, configureStore } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
        name:'counter',
        initialState:{
            contacts:[],
            loading:false,
            error:false,
        },
        reducers:{
            fetchContacsLoading:(state, action)=>
            {
                state.loading= true;
                state.loading = false;
            },
            fetchContactsSuccess: (state, action)=>{
                state.contacts = action.payload;
                state.loading = false;
                state.loading = false;
            },
            fetchContactsError: (state, action)=>
            {
                return ({
                    ...state,
                    loading:false,
                    error:true,
                });
            },
        }
    }
)
export const {fetchContacsLoading, fetchContactsSuccess, fetchContactsError} = contactsSlice.actions;
export default Store = configureStore({
    reducer: contactsSlice.reducer,
})