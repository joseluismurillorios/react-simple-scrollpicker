import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TinyGesture from 'tinygesture';

const Draggable = ({
  children,
  className,
  id,
  onPan,
  onPanEnd,
  style,
}) => {
  const swippableRef = useRef(null);
  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // const panmove = useRef((gesture, e) => {
  //   onPan(gesture, e);
  // });
  // const panend = useRef((gesture, e) => {
  //   onPanEnd(gesture, e);
  // });

  useEffect(() => {
    const gesture = new TinyGesture(swippableRef.current);
    gesture.on('panmove', (e) => {
      onPan(gesture, e);
    });
    gesture.on('panend', (e) => {
      onPanEnd(gesture, e);
    });
    const curRef = swippableRef.current;
    curRef.addEventListener('touchmove', preventDefaults);
    return () => {
      gesture.destroy();
      curRef.removeEventListener('touchmove', preventDefaults);
    };
  }, []);
  return (
    <div
      id={id}
      className={className}
      ref={swippableRef}
      style={style}
    >
      {children}
    </div>
  );
};

Draggable.defaultProps = {
  className: '',
  id: '',
  onPan: () => {},
  onPanEnd: () => {},
  style: {},
};

Draggable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  onPan: PropTypes.func,
  onPanEnd: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
};

export default Draggable;
