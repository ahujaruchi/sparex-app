import { GET_PRODUCTS, FILTER_ALL } from './type';
import axios from 'axios';
import requests from '../requests';

//console.log(requests.firstLoad);
export const getProducts = () => async dispatch => {
    try {
        let url = requests.firstLoad;
        const res = await axios.get(url)
        dispatch({
            type: GET_PRODUCTS,
            payload: res
        })
    }
    catch (err) {
        console.log(err.res)

    }
}

export const filterData = (Filteryear, LaunchValue, LandValue) => async dispatch => {
    try {
        let url = requests.firstLoad + requests.launchSuccessFilter + LaunchValue + requests.launchLandFilter + LandValue + requests.lanuchYear + Filteryear;
        const res = await axios.get(url);
        dispatch({
            type: FILTER_ALL,
            payload: res

        })
    }
    catch (err) {
        console.log(err.res)
    }
}




