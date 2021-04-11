import { useSetRecoilState } from "recoil";

import { mainContentState } from "../../recoilState";

const AddCharacter = () => {
  const setMainContent = useSetRecoilState(mainContentState);
  return (
    <>
      <button className="backButton" onClick={() => setMainContent("More")}>
        {" "}
        <i className="fas fa-arrow-left"></i>
      </button>
    </>
  );
};

export default AddCharacter;
