import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Tweenable } from 'shifty';

import { MONTHS_LONG } from './utils';
import './style.scss';

const ScrollPicker = ({
  height,
}) => {
  const tweenRef = useRef(new Tweenable()).current;
  const containerRef = useRef(null);
  const [index, setIndex] = useState(1);

  const tween = useCallback((to) => {
    if (tweenRef.isPlaying()) {
      tweenRef.pause();
      tweenRef.stop();
    }
    tweenRef.setConfig({
      from: { x: index },
      to: { x: to },
      duration: 500,
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

  useEffect(() => {
    containerRef.current.addEventListener('mousewheel', (e) => {
      console.log(e.wheelDelta);
    })
  }, []);

  const top = height * index * -1;

  return (
    <div className="scrollpicker" style={{ height: height * 5 }}>
      <div ref={containerRef} className="scrollpicker__container" style={{ height }}>
        <div className="scrollpicker__body" style={{ height: height * MONTHS_LONG.length, top }}>
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
      </div>
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
