import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Tweenable } from 'shifty';

import { clamp, MONTHS_LONG } from './utils';
import './style.scss';
import Draggable from '../draggable';

const ScrollPicker = ({
  height,
}) => {
  const tweenRef = useRef(new Tweenable()).current;
  const bodyRef = useRef(null);
  const movingRef = useRef(false);
  const indexRef = useRef(1);
  const topRef = useRef(indexRef.current * height * -1);

  const length = MONTHS_LONG.length;

  const tween = useCallback((from, to) => {
    if (from === to) { return; }
    if (tweenRef.isPlaying()) {
      tweenRef.pause();
      tweenRef.stop();
    }
    tweenRef.setConfig({
      from: { x: from },
      to: { x: to },
      duration: 150,
      easing: 'easeOutQuad',
      step: (state) => {
        const top = state.x * height * -1;
        bodyRef.current.style.top = `${top}px`
        topRef.current = top;
      },
    });
    tweenRef.tween()
      .then(() => {
        indexRef.current = to;
        movingRef.current = false;
        console.log('onChange', MONTHS_LONG[to])
      });
  }, [height, tweenRef]);

  const move = ({ touchMoveY }) => {
    if (tweenRef.isPlaying()) {
      return;
    }
    movingRef.current = true;
    const currentTop = (indexRef.current * height * -1);
    topRef.current = currentTop + touchMoveY;
    bodyRef.current.style.top = `${topRef.current}px`
  };

  const release = ({ touchMoveY }, e) => {
    const currentIndex = (topRef.current / height) * -1;
    const index = e.target.getAttribute('data-index');
    const moved = touchMoveY && Math.abs(touchMoveY) > 10;
    if (moved) {
      const rounded = Math.round(currentIndex);
      tween(currentIndex, clamp(rounded, 0, length - 1));
    } else if (index !== undefined) {
      tween(currentIndex, index);
    }
  };

  useEffect(() => {
    tween(0, indexRef.current);
  }, []);

  return (
    <div className="scrollpicker" style={{ height: height * 5 }}>
      <Draggable
        className="scrollpicker__container"
        style={{ height }}
        onPan={move}
        onPanEnd={release}
      >
        <div
          className="scrollpicker__body"
          style={{
            height: height * MONTHS_LONG.length,
          }}
          ref={bodyRef}
        >
          {
            MONTHS_LONG.map((month, i) => (
              <div
                key={month}
                className="scrollpicker__pick"
                style={{ height }}
                data-index={i}
              >
                {month}
              </div>
            ))
          }
        </div>
      </Draggable>
    </div>
  );
};

ScrollPicker.defaultProps = {
  height: 60,
};

ScrollPicker.propTypes = {
  height: PropTypes.number,
};

export default ScrollPicker;
