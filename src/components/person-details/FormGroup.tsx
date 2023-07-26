type FormGroupProps = {
  htmlFor: string;
  labelText: string;
  children: React.ReactElement;
};

const FormGroup = (props: FormGroupProps) => {
  const { htmlFor, labelText, children } = props;

  return (
    <div className="form-group">
      <label htmlFor={htmlFor} className="form-group__label">
        {labelText}
      </label>
      {children}
    </div>
  );
};

export default FormGroup;
