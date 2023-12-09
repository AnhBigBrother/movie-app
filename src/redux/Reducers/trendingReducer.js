const trendingReducer = (state = {}, action) => {
    switch (action.type){
        case 'updateTrending': return action.payload;
        default : return state;
    }
}

export default trendingReducer;