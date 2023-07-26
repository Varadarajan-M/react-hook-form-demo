import { forwardRef } from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { error: string };

const withErrorHandle = (InputComponent: any) => {
  return forwardRef((props: InputProps, ref) => {
    const { error } = props;
    return (
      <>
        <InputComponent ref={ref} {...props} />
        <span className="error-message">{error}</span>
      </>
    );
  });
};

export default withErrorHandle;
