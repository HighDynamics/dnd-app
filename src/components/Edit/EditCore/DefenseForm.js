import React, { useState } from "react";

import { camelCaseToTitleCase } from "../../../utilities/utilities";

import "./DefenseForm.css";

const DefenseForm = ({ field, value, handleEvent, fieldPath }) => {
  const [fieldValue, setFieldValue] = useState(value);
  const fieldTitle = camelCaseToTitleCase(field);
  const handleChange = handleEvent(setFieldValue, fieldPath.field);
  return (
    <>
      {fieldTitle}{" "}
      {typeof value === "number" && (
        <input
          className="numberInput"
          type="number"
          value={fieldValue}
          onChange={handleChange}
        />
      )}
      {typeof value !== "number" && (
        <input type="text" value={fieldValue} onChange={handleChange} />
      )}
      <br />
    </>
  );
};
export default DefenseForm;
