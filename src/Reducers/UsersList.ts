import { UsersActionsType, UsersType } from "./UsersListAC";

export type InitialCalculatorStateType = typeof initialState

const initialState: UsersType = {
  users: []
}

export const UsersListReducer = (state = initialState, action: UsersActionsType) => {
  switch (action.type) {
    case 'LOAD-USERS': {
      return {...state, users: action.users}
    }
    default: return state
  }
}