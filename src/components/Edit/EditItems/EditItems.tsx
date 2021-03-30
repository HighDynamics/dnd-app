import { useSetRecoilState } from "recoil";

import { mainContentState } from "../../../recoilState";

const EditItems = () => {
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

export default EditItems;
