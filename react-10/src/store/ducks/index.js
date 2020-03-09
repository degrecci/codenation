import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage: storage
};

const initialState = [];

function contacts(state = initialState, action) {
  switch (action.type) {
    case "CREATE_CONTACT":
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}

const rootReducer = combineReducers({ contacts });

export default persistReducer(rootPersistConfig, rootReducer);
