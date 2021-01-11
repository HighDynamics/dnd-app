import { useState } from "react";

import { camelCaseToTitleCase } from "../../../utilities/utilities";

import "./SavesForm.css";

const SavesForm = ({
  field,
  value,
  handleEvent,
  fieldParent,
}: {
  field: string;
  value: number;
  handleEvent: (
    setter: (value: number) => void,
    fieldParent: string
  ) => React.ChangeEventHandler;
  fieldParent: string;
}) => {
  const [fieldValue, setFieldValue] = useState(value);
  const fieldName = camelCaseToTitleCase(field);
  const handleChange = handleEvent(setFieldValue, fieldParent);
  return (
    <>
      <label>
        {fieldName}:{" "}
        <input
          name={field}
          className="numberInput twoDigit savesFormItemNumber"
          type="number"
          value={fieldValue}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default SavesForm;
