import React from "react";
import { useSetRecoilState } from "recoil";

import { modalTypeState } from "../../recoilState.js";
import { Modal } from "../Modal/Modal.js";
import {
  HitPointInfo,
  ArmorClassInfo,
  Defense,
} from "../Modal/ModalContent/ModalContent.js";
import "./HPACInfo.css";

const HPACInfo = (props) => {
  const setModalType = useSetRecoilState(modalTypeState);
  return (
    <>
      {" "}
      <Modal onClose={() => setModalType("Off")}>
        <div className="HPACFlexContainer">
          <div className="hitPointContainer">
            <HitPointInfo />
          </div>
          <div className="HPAChr"></div>
          <div className="armorClassContainer">
            <ArmorClassInfo />
          </div>
        </div>
        <hr className="underHPAChr" />
        <Defense />
      </Modal>
    </>
  );
};

export default HPACInfo;
