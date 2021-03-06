import {LICIENSES_LOADING, LICIENSES_LOADED, FLASH_MESSAGE} from './types';
import axios from 'axios';
import {flashMessage} from './messageActions';

export const loadLicenses = (discordID) => (dispatch, getState) => {
    dispatch({type: LICIENSES_LOADING});
    axios.get('http://localhost:1812/license', {
        params: {
            discordID: discordID
        }
    })
    .then((res)=>{
        dispatch({
            type: LICIENSES_LOADED,
            payload: res.data
        });
    })
    .catch((err)=>{
        dispatch(flashMessage(err.msg, err.status));
    })
}

