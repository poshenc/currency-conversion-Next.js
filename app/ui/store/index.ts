import { combineReducers, configureStore } from '@reduxjs/toolkit'
import conversionSlice from './conversion/conversion-slice'

const rootReducer = combineReducers({
  conversion: conversionSlice.reducer
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type Store = ReturnType<typeof makeStore>
export type RootState = ReturnType<Store['getState']>