import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restoreState } from "../../API/LocalStorage";
import API from "../../API/UserMe";
import { changeAuthMe } from "../../Reducers/LoginAC";
import { UsersLoaded, UsersType } from "../../Reducers/UsersListAC";
import { AppRootStateType } from "../../store/state";
import s from './Users.module.scss'
export const Users: FC = React.memo(function () {
  const dispatch = useDispatch()
  const users = useSelector<AppRootStateType, UsersType>(state => state.UsersListReducer)
  async function getUsers(name: string) {
    let { data } = await API.getUsers(name)
    dispatch(UsersLoaded(data[name]))
  }
  useEffect(() => {
    let me = restoreState('authMe', { login: '0', password: 0 })
    if (me.login !== '0') {
      getUsers(me.login)
    }
  }, [])

  return (
    <div>
      {users.users.map(e => (
        <div className={s.wrapper}>
          <p>Name: {e.name}</p>
          <p>Number: {e.Number}</p>
        </div>
      )
      )}
    </div>
  )
})