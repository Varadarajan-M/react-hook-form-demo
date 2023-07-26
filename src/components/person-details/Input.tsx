import React from "react";
import withErrorHandle from "./withErrorHandle";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef((props: InputProps, ref: any) => {
  return <input ref={ref} {...props} />;
});

export const Input2 = (props: any) => {
  return <input {...props.register(props.field)} {...props} />;
};
export default withErrorHandle(Input);
