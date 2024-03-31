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
      const { conversionType, currencyId } = action.payload

      if (conversionType === 'base') {
        state.baseCurrencyId = currencyId
      } else if (conversionType === 'quote') {
        state.quoteCurrencyId = currencyId
      }
    }
  }
})

export default conversionSlice