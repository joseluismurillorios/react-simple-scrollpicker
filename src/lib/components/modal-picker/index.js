import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { FADE_MILLI } from './constants';
import { CSSTransition } from 'react-transition-group';
import TimePicker from '../time-picker';

const ModalPicker = ({
  isVisible,
  toggleModal,
  value,
  minValue,
}) => {
  const hourTransRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={hourTransRef}
      in={isVisible}
      timeout={FADE_MILLI}
      classNames="transition-fade"
      unmountOnExit
      mountOnEnter
    >
      <div className="modalpicker" ref={hourTransRef}>
        <button className="modalpicker__overlay" onClick={toggleModal} />
        <div className="modalpicker__wrapper">
          <TimePicker onCancel={toggleModal} value={value} minValue={minValue} controls />
        </div>
      </div>
    </CSSTransition>
  );
};

ModalPicker.defaultProps = {
  isVisible: false,
  toggleModal: () => {},
  value: new Date(),
  minValue: undefined,
};

ModalPicker.propTypes = {
  isVisible: PropTypes.bool,
  toggleModal: PropTypes.func,
  value: PropTypes.instanceOf(Date),
  minValue: PropTypes.instanceOf(Date),
};

export default ModalPicker;
