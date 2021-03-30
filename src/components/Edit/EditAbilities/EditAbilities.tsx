import { useSetRecoilState } from "recoil";

import { mainContentState } from "../../../recoilState";

const EditAbilities = () => {
  const setMainContent = useSetRecoilState(mainContentState);
  return (
    <>
      <button onClick={() => setMainContent("More")}>
        {" "}
        <i className="fas fa-arrow-left"></i>
      </button>
    </>
  );
};

export default EditAbilities;
