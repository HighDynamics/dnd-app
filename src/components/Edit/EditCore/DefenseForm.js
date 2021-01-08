import React, { useState } from "react";

import { camelCaseToTitleCase } from "../../../utilities/utilities";

import "./DefenseForm.css";

const DefenseForm = ({ field, value, handleEvent, fieldPath }) => {
  const [fieldValue, setFieldValue] = useState(value === "immune" ? 0 : value);
  const [immunity, setImmunity] = useState(value === "immune" ? true : false);
  const fieldTitle = camelCaseToTitleCase(field);
  const handleChange = handleEvent(setFieldValue);
  return (
    <>
      {fieldTitle}:{" "}
      {field === "weakness" && (
        <input
          type="text"
          className="textInput"
          name={field}
          value={fieldValue}
          onChange={handleChange}
        />
      )}
      {fieldPath === "energyResistance" ? (
        <div className="immunity">
          <span>immune</span>
          <input
            type="checkbox"
            name={field}
            checked={immunity}
            onChange={() => handleEvent(setImmunity(!immunity))}
          />
        </div>
      ) : null}
      {field !== "weakness" && (
        <input
          className={
            "numberInput twoDigit " + (immunity ? " disabledInput" : "")
          }
          name={field}
          type="number"
          value={fieldValue}
          onChange={handleChange}
          disabled={immunity}
        />
      )}
      <br />
    </>
  );
};
export default DefenseForm;
