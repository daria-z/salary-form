import React from "react";
import { FieldRenderProps } from "react-final-form";
import Form from 'react-bootstrap/Form';

type Props = FieldRenderProps<boolean, any>;

const CheckboxInput: React.FC<Props> = ({
  input: { value, ...input },
}: Props) => (
  <input
    {...input}
    className="form-check-input"
    type="checkbox"
    role="switch"
    checked={!!value}
  />
);

export default CheckboxInput;
