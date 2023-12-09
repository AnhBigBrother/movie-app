const topRatedReducer = (state = {}, action) => {
    switch (action.type){
        case 'updateTopRated': return action.payload;
        default : return state;
    }
}

export default topRatedReducer;