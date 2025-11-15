import React from "react";

import { rejectNonDigit } from "../../lib";
import { Input } from "./Input";

export function NumericInput(p: React.InputHTMLAttributes<HTMLInputElement>) {
  const onChange = p.onChange;
  const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined =
    onChange
      ? (e) => {
          const cleaned = rejectNonDigit(e.target.value);
          if (e.target.value === cleaned) {
            onChange(e);
            return;
          }

          const cloned = {
            ...e,
            target: { ...e.target, value: cleaned },
            currentTarget: { ...e.currentTarget, value: cleaned },
          } as React.ChangeEvent<HTMLInputElement>;

          onChange(cloned);
        }
      : undefined;

  return (
    <Input
      {...p}
      inputMode="numeric"
      pattern="[0-9]*"
      value={p.value}
      onChange={handleChange}
    />
  );
}
