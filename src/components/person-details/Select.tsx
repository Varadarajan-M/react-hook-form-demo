import React from "react";
import withErrorHandle from "./withErrorHandle";

const Select = React.forwardRef((props: any, ref: any) => {
  const { children } = props;
  return (
    <select ref={ref} {...props}>
      {children}
    </select>
  );
});

export default withErrorHandle(Select);
