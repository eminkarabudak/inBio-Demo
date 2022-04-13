import React, { useRef, Fragment } from 'react';
import classNames from "classnames";
import clickOutside from "../../hooks/clickOutside";

import './modal.scss';
import bodyPositionFixed from '../../hooks/bodyPositionFixed';

const Modal = (props) => {
  const { title, children, show, onClose, className } = props
  const ref = useRef();
  clickOutside(ref, () => {
    onClose();
  });

  bodyPositionFixed(show);

  return (
    <Fragment>
      {
        show && <div className={classNames('modal', className)}>
          <div className="modal__wrapper">
            <div className="modal__body" ref={ref}>
              <div className="modal__title">
                {title}
              </div>
              <div className="modal__content">
                {children}
              </div>
            </div>
          </div>
        </div>
      }
    </Fragment>
  )
}

export default Modal;
