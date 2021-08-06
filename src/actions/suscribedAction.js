import { USER_SUSCRIBED } from "../types"

export const suscribedAction = () => {
    return ( dispatch ) => {
        dispatch(suscribedReducer());
    }
}

const suscribedReducer = () => ({
    type: USER_SUSCRIBED
})