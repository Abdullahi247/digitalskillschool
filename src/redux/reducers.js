import * as ac from './types/index'


import { combineReducers } from "redux";
export const action1 = () => (dispatch) => {
    dispatch({ type: ac.Action_Loading, payload: 'hi' })
}

const reducer1 = (initial = { badman: "go", }, action) => {
    switch (action.type) {
        case ac.Action_Loading:
            return { badman: "df" };

        default:
            return initial;
    }
}


const rootReducers = combineReducers({
    rd: reducer1
})

export default rootReducers
