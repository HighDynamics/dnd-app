import { useEffect } from "react";
import { useState } from "react";

import "./Modal.css";

type DivProps = React.PropsWithoutRef<JSX.IntrinsicElements["div"]>;

export const Modal = (
  props: DivProps & { onClose: React.MouseEventHandler }
) => {
  const [modalFadeState, setModalFadeState] = useState(true);
  const { onClose, children, ...rest } = props;
  const modalClassNames =
    modalFadeState !== false ? "modal fadeIn" : "modal fadeOut";

  const closeModal = () => {
    onClose(setModalFadeState(false));
  };
  useEffect(function blockBodyScrolling() {
    document.body.classList.add("noScroll");

    return () => {
      document.body.classList.remove("noScroll");
    };
  }, []);

  return (
    <div className={modalClassNames} {...rest}>
      <button className="modal_closeButton defaultButton" onClick={closeModal}>
        x
      </button>
      {children}
    </div>
  );
};
