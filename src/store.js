import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { addCartListReducer } from "./components/redux/reducer/cartreducer";

const reducer = combineReducers({
    
    addCart:addCartListReducer,
    
});




const middleware = [thunk];

const store = createStore(
    reducer,
   
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;