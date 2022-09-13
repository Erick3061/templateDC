import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface ModalsState {
    TOP_NAV_search: boolean;
    TOP_NAV_profile: boolean;
    USERS_create: boolean;
    USERS_delete: boolean;
};

const initialState: ModalsState = {
    TOP_NAV_search: false,
    TOP_NAV_profile: false,
    USERS_create: false,
    USERS_delete: false,
};

export const ModalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        update_USERS_delete: (state, action: PayloadAction<boolean>) => {
            state.USERS_delete = action.payload;
        },
        update_USERS_create: (state, action: PayloadAction<boolean>) => {
            state.USERS_create = action.payload;
        }
    }
});

export const { update_USERS_delete, update_USERS_create } = ModalsSlice.actions;
export const selectModals = (state: RootState) => state.modals;
export default ModalsSlice.reducer;