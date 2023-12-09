const detailReducer = (state = {}, action) => {
    switch (action.type){
        case 'updateDetail': return action.payload;
        default : return state;
    }
}

export default detailReducer;