import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Tweenable } from 'shifty';

import Draggable from '../draggable';
import { clamp } from './utils';
import './style.scss';

const ScrollPicker = ({
  height,
  items,
  selected,
  itemsToShow,
}) => {
  const tweenRef = useRef(new Tweenable()).current;
  const bodyRef = useRef(null);
  const movingRef = useRef(false);
  const indexRef = useRef(items.indexOf(selected));
  const topRef = useRef(indexRef.current * height * -1);

  const length = items.length;

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
        bodyRef.current.style.top = `${top}px`;
        topRef.current = top;
      },
    });
    tweenRef.tween()
      .then(() => {
        indexRef.current = to;
        movingRef.current = false;
        console.log('onChange', items[to], to);
      });
  }, [height, tweenRef, items]);

  const move = ({ touchMoveY }) => {
    if (tweenRef.isPlaying()) {
      return;
    }
    movingRef.current = true;
    const currentTop = (indexRef.current * height * -1);
    topRef.current = currentTop + touchMoveY;
    bodyRef.current.style.top = `${topRef.current}px`;
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

  const toShow = itemsToShow > 1 ? itemsToShow : 1;
  const overlayHeight = (toShow - 1) / 2;
  return (
    <div className="scrollpicker" style={{ height: height * toShow }}>
      <Draggable
        className="scrollpicker__container"
        style={{ height }}
        onPan={move}
        onPanEnd={release}
      >
        <div
          className="scrollpicker__body"
          style={{
            height: height * items.length,
          }}
          ref={bodyRef}
        >
          {
            items.map((month, i) => (
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
      <div className="scrollpicker__overlay overlay-top" style={{ height: overlayHeight * height }} />
      <div className="scrollpicker__overlay overlay-bottom" style={{ height: overlayHeight * height }} />
    </div>
  );
};

ScrollPicker.defaultProps = {
  height: 60,
  itemsToShow: 5,
  selected: 'Yes',
  items: ['Yes', 'No'],
};

ScrollPicker.propTypes = {
  height: PropTypes.number,
  itemsToShow: PropTypes.number,
  selected: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.any),
};

export default ScrollPicker;
