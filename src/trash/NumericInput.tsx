// NumericInput.tsx
import React, { ChangeEvent } from "react";
import { FieldRenderProps } from "react-final-form";

interface NumericInputProps
  extends FieldRenderProps<string, HTMLInputElement> {}

const NumericInput: React.FC<NumericInputProps> = ({
  input,
  meta,
  ...rest
}) => {
  const onNumericInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    const formattedValue = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    input.onChange(formattedValue);
  };

  return (
    <input
      {...input}
      {...rest}
      value={input.value}
      onChange={onNumericInputChange}
    />
  );
};

export default NumericInput;
