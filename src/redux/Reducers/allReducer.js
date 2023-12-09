import { combineReducers } from "redux";
import detailReducer from "./detailReducer.js";
import resultReducer from "./resultReducer.js";
import popularReducer from "./popularReducer.js";
import topRatedReducer from "./topRatedReducer.js";
import trendingReducer from "./trendingReducer.js";
import upCommingReducer from "./upCommingReducer.js";


const allReducer = combineReducers({
    detail: detailReducer,
    result: resultReducer,
    popular: popularReducer,
    topRated: topRatedReducer,
    trending: trendingReducer,
    upComming: upCommingReducer
})

export default allReducer;