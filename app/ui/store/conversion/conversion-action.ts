import { Dispatch } from "redux"
import conversionSlice from "./conversion-slice"

export const conversionActions = conversionSlice.actions

export const updateConversionCurrency = (currencyType: string, currencyId: string) => (dispatch: Dispatch) => {
  return dispatch(conversionActions.updateConversionCurrency({ currencyType, currencyId }))
}