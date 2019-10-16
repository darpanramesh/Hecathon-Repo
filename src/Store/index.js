import { createStore, applyMiddleware } from 'redux'
import Reducer from './Reducers/auth-reducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
export default createStore(Reducer, applyMiddleware(thunk))

const persistConfig = {
    key: 'root',
    storage,
}
   

const persistedReducer = persistReducer(persistConfig, Reducer)
  let store = createStore(persistedReducer,applyMiddleware(thunk))
let persistor = persistStore(store)

export{
    store,
    persistor 
}
 