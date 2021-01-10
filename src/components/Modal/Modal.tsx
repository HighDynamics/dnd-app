import { useEffect } from "react";
import "./Modal.css";

type DivProps = React.PropsWithoutRef<JSX.IntrinsicElements["div"]>;

export const Modal = (
  props: DivProps & { onClose: React.MouseEventHandler }
) => {
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
