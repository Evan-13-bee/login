import { LoginActionsType } from "./LoginAC"

export type InitialLoginStateType = typeof initialState

const initialState = {
  me: false
}

export const LoginReducer = (state = initialState, action: LoginActionsType) => {
  switch (action.type) {
    case 'AUTH-ME': {
      return {...state, me: action.status}
    }
    default: return state
  }
}