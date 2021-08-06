import { distritos } from '../data/distritos.json';

export const getDistritosByProvincia = ( provincia ) => {
    return distritos[provincia];
}