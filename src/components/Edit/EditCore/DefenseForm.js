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
      {field !== "weakness" && (
        <input
          className={"numberInput" + (immunity ? " disabledInput" : "")}
          name={field}
          type="number"
          value={fieldValue}
          onChange={handleChange}
          disabled={immunity}
        />
      )}
      {fieldPath === "energyResistance" ? (
        <>
          <span>immune</span>
          <input
            type="checkbox"
            checked={immunity}
            onChange={() => setImmunity(!immunity)}
          />{" "}
        </>
      ) : null}
      <br />
    </>
  );
};
export default DefenseForm;
