import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import {
  partnerDetailsReducer,
  partnerListReducer,
} from "./reducers/partnerReducer";
import { userListReducer, userRegisterReducer } from "./reducers/userReducers";

const initialState = {
  user: {
    userInfo: {},
  },
  userRegister: {},

  partnerDetails: {
    partner: {},
  },
};
const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userList: userListReducer,
  partnerDetails: partnerDetailsReducer,
  partnerList: partnerListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
