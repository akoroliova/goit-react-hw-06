import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import contactListReducer from "./contactListReducer";

const rootReducer = combineReducers({
  contactList: contactListReducer,
});

const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);

export default store;
