import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<any>;

const TextInput: React.FC<Props> = ({ input, meta, label, ...rest }: Props) => (
  <div>
    <input className="form-input-text" {...input} {...rest} />
    <label htmlFor={input.name}>{label}</label>
  </div>
);

export default TextInput;
