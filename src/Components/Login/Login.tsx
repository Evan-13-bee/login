import React, { ChangeEvent, useEffect, useState } from "react";
import { FC } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { restoreState, saveState } from "../../API/LocalStorage";
import API, { UserType } from "../../API/UserMe";
import { LoginInput } from "../LoginInput/LoginInput";

export const Login: FC = React.memo(() => {
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  async function getData() {
    let answer = await API.getUserMe(name, password)
    if (answer.data.length) {
      await saveState('authMe', answer.data[0])
      navigate('/users')
    }
  }
  return (
    <>
      <LoginInput
        label={'Name'}
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => { setName(e.currentTarget.value) }}
      />
      <LoginInput
        label={'Password'}
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => { setPassword(e.currentTarget.value) }}
      />
      <button onClick={() => getData()}>Login</button>
    </>
  )
})