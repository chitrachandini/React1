import {GET_VIDEO} from '../constant/types';
export const getVideo =(id) =>({
    type:GET_VIDEO,
    payload:id,
})