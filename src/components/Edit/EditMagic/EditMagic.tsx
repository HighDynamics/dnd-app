import { useSetRecoilState } from "recoil";

import { mainContentState } from "../../../recoilState";

const EditMagic = () => {
  const setMainContent = useSetRecoilState(mainContentState);
  return (
    <>
      <button onClick={() => setMainContent("More")}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <div className="editMagicOptionsContainer">
        <button className="editMagicButtons" onClick={setMainContent}></button>
      </div>
    </>
  );
};

export default EditMagic;
