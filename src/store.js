import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from '../src/reducers/rootReducer';

const persistConfig = {
	key: 'async',
	storage:AsyncStorage,
	whitelist: [ 'products' ]
};
const initialState = {};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);

export default {
	store,
	persistor
};

export { store, persistor };
