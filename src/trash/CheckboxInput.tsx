import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<boolean, any>;

const CheckboxInput: React.FC<Props> = ({
  input: { value, ...input },
}: Props) => (
  <div className="form-check custom-form-check form-switch custom-switch">
    <input
      {...input}
      className="form-check-input"
      type="checkbox"
      role="switch"
      checked={!!value}
    />
    <label className="form-check-label label-1" htmlFor={input.name}>
      Указать с НДФЛ
    </label>

    <label className="form-check-label label-2" htmlFor={input.name}>
      Указать без НДФЛ
    </label>
  </div>
);

export default CheckboxInput;
