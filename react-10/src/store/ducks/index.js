import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({})

export default persistReducer(rootPersistConfig, rootReducer);
