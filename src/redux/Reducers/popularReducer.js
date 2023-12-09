const popularReducer = (state = {}, action) => {
    switch (action.type){
        case 'updatePopular': return action.payload;
        default : return state;
    }
}

export default popularReducer;