import React, { DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import { FC } from "react";
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputType = DefaultInputPropsType & {
  label?: string
}
export const LoginInput: FC<InputType> = React.memo(function ({ label, ...restProps }) {

  return (
    <>
      {
        label &&
        <label>{label}</label>
      }
      <input type="text" {...restProps} />
    </>
  )
})