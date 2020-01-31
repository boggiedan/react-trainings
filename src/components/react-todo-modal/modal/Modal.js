import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ModalWrapper from "./modalwrapper/ModalWrapper";

const Modal = ({ isShowing, onHide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <ModalWrapper onHide={onHide}>{children}</ModalWrapper>,
        document.body
      )
    : null;

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,

  onHide: PropTypes.func.isRequired,

  children: PropTypes.node.isRequired
};

export default Modal;
