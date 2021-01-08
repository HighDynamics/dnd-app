import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { clone } from "../../../utilities/utilities";
import { updatedCharacterState } from "../../../recoilState";

import { camelCaseToTitleCase } from "../../../utilities/utilities";

import "./ArmorClassForm.css";

const ArmorClassForm = (props) => {
  const { field, value } = props;
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const [fieldValue, setFieldValue] = useState(value);
  const fieldName = camelCaseToTitleCase(field);
  const editedCharacter = clone(updatedCharacter);

  function handleChange(e) {
    setFieldValue(e.target.value);
    editedCharacter.armorClass[field] = Number(e.target.value);

    setUpdatedCharacter(editedCharacter);
  }
  return (
    <div className="armorClassFormItem">
      {fieldName}:{" "}
      <input
        type="number"
        name="field"
        className="numberInput twoDigit armorClassFormItemNumber"
        value={fieldValue}
        onChange={handleChange}
      />
    </div>
  );
};
export default ArmorClassForm;
