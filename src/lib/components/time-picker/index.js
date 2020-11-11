import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ScrollPicker from '../scroll-picker';
import { HOURS, MINUTES, roundUpTo5Minutes } from '../scroll-picker/utils';

const TimePicker = ({
  id,
  className,
  style,
  value,
  minValue,
}) => {
  const roundedValue = new Date(roundUpTo5Minutes(value))
  const currentHours = roundedValue.getHours();
  const currentMinutes = roundedValue.getMinutes();

  const [hours, setHours] = useState(currentHours % 12);
  const [minutes, setMins] = useState(currentMinutes);
  const [ampm, setAmPm] = useState(currentHours < 12);

  const onHour = (e) => {
    setHours(e.value);
  };

  const onMinutes = (e) => {
    setMins(e.value);
  };

  const onAmPm = (e) => {
    setAmPm(e.value === 'AM');
  };

  useEffect(() => {
    const adder = ampm ? 0 : 12;
    const newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours + adder, minutes, 0);
    if (minValue && minValue.getTime() > newValue.getTime()) {
      setTimeout(() => {
        setHours(currentHours % 12);
        setMins(currentMinutes);
        setAmPm(currentHours < 12);
      }, 200);
    } else {
      console.log('onChange', newValue);
    }
  }, [value, minValue, hours, minutes, ampm, currentHours, currentMinutes]);

  return (
    <div className="scrollpicker__main">
      <div className="scrollpicker__header">
        <div className="scrollpicker__title">Time</div>
      </div>
      <div className={`scrollpicker__wrapper ${className}`} style={style}>
        <ScrollPicker name="hours" items={HOURS} value={hours} onChange={onHour} />
        <ScrollPicker name="minutes" items={MINUTES} value={minutes} onChange={onMinutes} />
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
  minValue: undefined,
};

TimePicker.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  value: PropTypes.instanceOf(Date),
  minValue: PropTypes.instanceOf(Date),
};

export default TimePicker;
