import { FieldRenderProps } from "react-final-form";

function RadioInput<T extends string>({
  input,
  meta,
  label,
  children,
  ...rest
}: FieldRenderProps<T, any>) {
  return (
    <div className="form-check custom-form-check custom-radio">
      <input className="form-check-input" {...input} {...rest} />
      <label htmlFor={input.name} className="form-check-label">
        {label}
      </label>
      {children}
    </div>
  );
}

export default RadioInput;
