import { types } from "../types/types";

export const authReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true
      }

    default:
      return state;
  }
}
