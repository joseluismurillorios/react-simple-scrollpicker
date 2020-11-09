import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Tweenable } from 'shifty';

import { clamp, MONTHS_LONG } from './utils';
import './style.scss';
import Draggable from '../draggable';

const ScrollPicker = ({
  height,
}) => {
  const tweenRef = useRef(new Tweenable()).current;
  const containerRef = useRef(null);
  const bodyRef = useRef(null);
  // const scrollerRef = useRef(null);
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
    const currentTop = (index * height * -1);
    const newTop = currentTop + touchMoveY;
    const clamped = clamp(newTop, height * (length - 1) * -1, 0)
    // console.log(newTop, clamped);
    bodyRef.current.style.top = `${clamped}px`;
  }

  const release = (gesture) => {
    console.log({ gesture });
  };

  useEffect(() => {
    // containerRef.current.addEventListener('mousewheel', (e) => {
    //   console.log(e.wheelDelta);
    // })
  }, []);

  const top = height * index * -1;

  return (
    <div className="scrollpicker" style={{ height: height * 5 }}>
      <Draggable
        ref={containerRef}
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
