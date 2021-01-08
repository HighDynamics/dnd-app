import React, { useState } from "react";

import { camelCaseToTitleCase } from "../../../utilities/utilities";

import "./SavesForm.css";

const SavesForm = ({ field, value, handleEvent, fieldParent }) => {
  const [fieldValue, setFieldValue] = useState(value);
  const fieldName = camelCaseToTitleCase(field);
  const handleChange = handleEvent(setFieldValue, fieldParent);
  return (
    <>
      {fieldName}:{" "}
      <input
        name={field}
        className="numberInput twoDigit savesFormItemNumber"
        type="number"
        value={fieldValue}
        onChange={handleChange}
      />
    </>
  );
};

export default SavesForm;
