import { createSlice } from "@reduxjs/toolkit"

const initialState: {
  baseCurrencyId: string;
  quoteCurrencyId: string;
} = {
  baseCurrencyId: '1',
  quoteCurrencyId: '4'
}

const conversionSlice = createSlice({
  name: 'conversion',
  initialState,
  reducers: {
    updateConversionCurrency(state, action) {
      const { currencyType, currencyId } = action.payload

      if (currencyType === 'base') {
        state.baseCurrencyId = currencyId
      } else if (currencyType === 'quote') {
        state.quoteCurrencyId = currencyId
      }
    }
  }
})

export default conversionSlice