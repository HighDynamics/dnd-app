import { useState } from "react";
import { useRecoilState } from "recoil";

import { clone, camelCaseToTitleCase } from "../../../utilities/utilities";
import { updatedCharacterState } from "../../../recoilState";

import "./AbilityScoreForm.css";

const AbilityScoreForm = ({
  field,
  value,
}: {
  field: keyof ICharacter["abilities"]["score"];
  value: number;
}) => {
  const [fieldValue, setFieldValue] = useState(value);
  const fieldName = camelCaseToTitleCase(field);
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const editedCharacter = clone(updatedCharacter);

  function handleChange(e: React.ChangeEvent) {
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
        <label>
          {fieldName}:{" "}
          <input
            type="number"
            name={field}
            value={fieldValue}
            className="numberInput twoDigit abilityScoreFormItemNumber"
            onChange={handleChange}
          />
        </label>
      </div>
    </>
  );
};

export default AbilityScoreForm;
