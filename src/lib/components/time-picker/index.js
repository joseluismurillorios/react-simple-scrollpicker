import React from 'react';
import PropTypes from 'prop-types';
import ScrollPicker from '../scroll-picker';

const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString());


const TimePicker = ({
  id,
  className,
  style,
  value,
}) => {
  const currentHours = value.getHours();
  const currentMinutes = value.getMinutes();
  const hrs =  currentHours % 12;
  const mins = Math.ceil(currentMinutes / 5) * 5;
  return (
    <div className="scrollpicker__main">
      <div className="scrollpicker__header">
        <div className="scrollpicker__title">Time</div>
      </div>
      <div className={`scrollpicker__wrapper ${className}`} style={style}>
        <ScrollPicker items={hours} selected={hrs.toString()} />
        <ScrollPicker items={minutes} selected={mins.toString()} />
        <ScrollPicker items={['AM','PM']} selected="AM" />
      </div>
    </div>
  );
};

TimePicker.defaultProps = {
  className: '',
  id: '',
  style: {},
  value: new Date(),
};

TimePicker.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  value: PropTypes.instanceOf(Date),
};

export default TimePicker;
