import { useEffect } from "react";
import "./Modal.css";

export const Modal = (props) => {
  const { onClose, children, ...rest } = props;

  useEffect(function blockBodyScrolling() {
    document.body.classList.add("noScroll");

    return () => {
      document.body.classList.remove("noScroll");
    };
  }, []);

  return (
    <div className="modal" {...rest}>
      <button className="modal_closeButton" onClick={onClose}>
        x
      </button>
      {children}
    </div>
  );
};
