import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { personReducer } from "./reducers";



const reducer = combineReducers({
  member:personReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
