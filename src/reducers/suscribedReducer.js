import { USER_SUSCRIBED } from "../types";


const initialValues = {
    status: false
}

export const suscribedReducer = (state = initialValues, action) => {
    switch (action.type) {
        case USER_SUSCRIBED:
            return {
                ...state,
                status: true
            }
        default:
           return state;
    }
}