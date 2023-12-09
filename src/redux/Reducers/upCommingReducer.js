const upCommingReducer = (state = {}, action) => {
    switch (action.type){
        case 'updateUpComming': return action.payload;
        default : return state;
    }
}

export default upCommingReducer;