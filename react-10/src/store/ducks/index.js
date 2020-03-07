import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage: storage
};

function contactReducer(initialState = {}, action) {
  switch (action.type)
}

const rootReducer = combineReducers({ contactReducer });

export default persistReducer(rootPersistConfig, rootReducer);
