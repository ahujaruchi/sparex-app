import { GET_PRODUCTS, FILTER_ALL } from '../Actions/type';


const initialState = () => ({
    data: []
});


const data = (state = initialState(), action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_PRODUCTS:
            // console.log(payload)
            return {
                ...state,
                data: [...payload.data]
            }
        case FILTER_ALL:
            const filterdata = payload.data.length !== 0 ? payload.data : [];
            return {
                ...state,
                data: [...filterdata],
                Url: payload
            }

        default:
            return state;
    }
}

export default data;