import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Tweenable } from 'shifty';

import { clamp, getIndex, MONTHS_LONG } from './utils';
import './style.scss';
import Draggable from '../draggable';

const ScrollPicker = ({
  height,
}) => {
  const tweenRef = useRef(new Tweenable()).current;
  const bodyRef = useRef(null);
  const [index, setIndex] = useState(1);

  const length = MONTHS_LONG.length;

  const tween = useCallback((to) => {
    if (tweenRef.isPlaying()) {
      tweenRef.pause();
      tweenRef.stop();
    }
    tweenRef.setConfig({
      from: { x: index },
      to: { x: to },
      duration: 300,
      easing: 'easeOutQuad',
      step: (state) => {
        setIndex(state.x);
      },
    });
    tweenRef.tween();
  }, [tweenRef, index]);

  const onPick = (i) => {
    tween(i);
  };

  const move = ({ touchMoveY }) => {
    if (tweenRef.isPlaying()) {
      return;
    }
    console.log({ index })
    const newIndex = getIndex(touchMoveY, index, height, length);
    setIndex(newIndex);
  };

  const release = ({ touchMoveY }) => {
    const newIndex = getIndex(touchMoveY, index, height, length);
    setIndex(Math.round(newIndex));
  };

  console.log({ index })
  const top = height * index * -1;

  return (
    <div className="scrollpicker" style={{ height: height * 5 }}>
      <Draggable
        // ref={containerRef}
        className="scrollpicker__container"
        style={{ height }}
        onPan={move}
        onPanEnd={release}
      >
        <div
          className="scrollpicker__body"
          style={{ height: height * MONTHS_LONG.length, top }}
          ref={bodyRef}
        >
          {
            MONTHS_LONG.map((month, i) => (
              <div
                key={month}
                className="scrollpicker__pick"
                style={{ height }}
                onClick={() => { onPick(i); }}
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
