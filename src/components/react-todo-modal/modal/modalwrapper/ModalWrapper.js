import React, { useEffect } from "react";
import PropTypes from "prop-types";

const ModalWrapper = ({ children, onHide }) => {
  const backgroundClickHandler = event => {
    if (event.target === event.currentTarget) onHide();
  };

  return (
    <div
      className="modal-container"
      aria-modal
      aria-hidden
      tabIndex={-1}
      role="dialog"
      onClick={backgroundClickHandler}
    >
      <div className="modal-content-container">
        <div className="modal-content-wrapper">{children}</div>
      </div>
    </div>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,

  onHide: PropTypes.func.isRequired
};

export default ModalWrapper;
