import { UsersListReducer } from './../Reducers/UsersList';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from '../Reducers/Login';

const rootReducers = combineReducers({
  LoginReducer,
  UsersListReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducers>