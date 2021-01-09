import { camelCaseToTitleCase } from "../../../utilities/utilities";

import "./DefenseForm.css";

const DefenseForm = ({ field, value, handleEvent, fieldPath }) => {
  const fieldValue = value === null ? 0 : value;
  const immunity = value === null ? true : false;
  const fieldTitle = camelCaseToTitleCase(field);
  return (
    <>
      {field === "weakness" && (
        <label>
          {fieldTitle}:{" "}
          <input
            type="text"
            className="textInput"
            name={field}
            value={fieldValue}
            onChange={handleEvent}
          />
        </label>
      )}
      {fieldPath === "energyResistance" ? (
        <div className="immunity">
          <label>
            immune
            <input
              type="checkbox"
              name={field}
              checked={immunity}
              onChange={handleEvent}
            />
          </label>
        </div>
      ) : null}
      {field !== "weakness" && (
        <label>
          {fieldTitle}:{" "}
          <input
            className={
              "numberInput twoDigit " + (immunity ? " disabledInput" : "")
            }
            name={field}
            type="number"
            value={fieldValue}
            onChange={handleEvent}
            disabled={immunity}
          />
        </label>
      )}
      <br />
    </>
  );
};
export default DefenseForm;
