const resultReducer = (state = {}, action) => {
    switch (action.type){
        case 'updateResult': return action.payload;
        default : return state
    }
}

export default resultReducer;