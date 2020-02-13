import { combineReducers } from "redux";
import { CodeReducer } from "../use-cases/main/screens/code/Code.reducer.screen";
import { UploadReducer } from "../use-cases/main/screens/upload/Upload.reducer.screen";
import { PasswordReducer } from "../use-cases/admin/screens/password/Password.reducer.screen";
import { ConfigReducer } from "../use-cases/admin/screens/config/Config.reducer.screen";
import { MeetingReducer } from "../use-cases/admin/screens/config/views/meeting/Meeting.reducer.view";
import { INIT } from "./App.actions";

export const rootReducer = combineReducers({
    CodeReducer,
    init,
    UploadReducer,
    PasswordReducer,
    ConfigReducer,
    MeetingReducer
});

export function init(
    state = {
        debug: false
    },
    action
) {
    switch (action.type) {
        case INIT:
            return {
                ...state,
                debug: action.payload.debug
            };
        default:
            return state;
    }
}
