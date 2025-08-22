import { useState } from "react";

export function useInput<T>(defaultValue: T, validationFn: (value: T) => boolean ) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let value: unknown;

    if (event.target.type === "checkbox") {
      value = event.target.checked; // Checkbox → boolean
    } else if (event.target.type === "number") {
      value = event.target.value === "" ? "" : Number(event.target.value); // Number Input → number
    } else {
      value = event.target.value; // Default → string
    }

    setEnteredValue(value as T);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
