import { compact } from 'lodash'
import { applyMiddleware, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { PersistedAppState, rootReducer } from './reducers'

const persistorConfig = {
  key: '@<YourAppName>:state',
  storage,
  whitelist: ['app'],
}

export const configStore = (initialState?: PersistedAppState) => {
  const sagaMonitor = undefined

  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  const appliedMiddleware = applyMiddleware(sagaMiddleware)
  const enhancers = compose(...compact([appliedMiddleware]))
  const persistedReducer = persistReducer(persistorConfig, rootReducer)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const store = createStore(persistedReducer, initialState, enhancers as any)
  const persistor = persistStore(store)
  //   sagaMiddleware.run(rootSaga);

  return { store, persistor }
}
