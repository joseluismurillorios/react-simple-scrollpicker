import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ScrollPicker from '../scroll-picker';
import { HOURS, MINUTES, roundUpTo5Minutes } from '../scroll-picker/utils';

const TimePicker = ({
  id,
  className,
  style,
  value,
}) => {
  const roundedValue = new Date(roundUpTo5Minutes(value))
  const currentHours = roundedValue.getHours();
  const currentMinutes = roundedValue.getMinutes();

  const [hrs, setHours] = useState(currentHours % 12);
  const [mins, setMins] = useState(currentMinutes);
  const [ampm, setAmPm] = useState(currentHours < 12);

  const onHour = (e) => {
    console.log(e.value);
    setHours(e.value);
  };

  const onMinutes = (e) => {
    console.log(e.value);
    setMins(e.value);
  };

  const onAmPm = (e) => {
    console.log(e.value);
    setAmPm(e.value === 'AM');
  };

  return (
    <div className="scrollpicker__main">
      <div className="scrollpicker__header">
        <div className="scrollpicker__title">Time</div>
      </div>
      <div className={`scrollpicker__wrapper ${className}`} style={style}>
        <ScrollPicker name="hours" items={HOURS} value={hrs} onChange={onHour} />
        <ScrollPicker name="minutes" items={MINUTES} value={mins} onChange={onMinutes} />
        <ScrollPicker name="ampm" items={['AM','PM']} value={ampm ? 'AM' : 'PM'} onChange={onAmPm} />
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
