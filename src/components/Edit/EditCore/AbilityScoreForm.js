import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { clone, camelCaseToTitleCase } from "../../../utilities/utilities";
import { updatedCharacterState } from "../../../recoilState";

import "./AbilityScoreForm.css";

const AbilityScoreForm = ({ field, value }) => {
  const [fieldValue, setFieldValue] = useState(value);
  const fieldName = camelCaseToTitleCase(field);
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const editedCharacter = clone(updatedCharacter);

  function handleChange(e) {
    setFieldValue(e.target.value);
    if (e.target.value > 0) {
      editedCharacter.abilities.score[field] = Number(e.target.value);
    } else {
      editedCharacter.abilities.score[field] = null;
    }
    setUpdatedCharacter(editedCharacter);
  }
  return (
    <>
      <div className="abilityScoreFormItem">
        {fieldName}:{" "}
        <input
          type="number"
          name={field}
          value={fieldValue}
          className="numberInput twoDigit abilityScoreFormItemNumber"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default AbilityScoreForm;
