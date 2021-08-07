import { USER_SUSCRIBED } from "../types/types"

export const suscribedAction = () => {

    return ( dispatch ) => {
        const data = localStorage.getItem('isSuscribed');
        const isSuscribed = JSON.parse(data);
        
        if(isSuscribed){
            dispatch(suscribedReducer());
        }
        console.log(isSuscribed)
    }
}

const suscribedReducer = () => ({
    type: USER_SUSCRIBED
})