import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TinyGesture from 'tinygesture';

const Draggable = ({
  children,
  className,
  id,
  onPan,
  onPanEnd,
  onSwipeRight,
  onSwipeLeft,
  style,
}) => {
  const swippableRef = useRef(null);
  useEffect(() => {
    const gesture = new TinyGesture(swippableRef.current);
    gesture.on('panmove', () => {
      // console.log('panmove');
      onPan(gesture);
    });
    gesture.on('panend', () => {
      // console.log('panend');
      onPanEnd(gesture);
    });
    gesture.on('swiperight', () => {
      onSwipeRight();
    });
    gesture.on('swipeleft', () => {
      onSwipeLeft();
    });
    return () => {
      gesture.destroy();
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
  onSwipeRight: () => {},
  onSwipeLeft: () => {},
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
  onSwipeRight: PropTypes.func,
  onSwipeLeft: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
};

export default Draggable;
