import React from 'react';
import { TimePicker } from '../lib';

const App = () => (
  <div className="app__fixed">
    <TimePicker value={new Date()} minValue={new Date()} />
    {/* <TimePicker
      value={new Date(2020, 11, 11, 0, 0, 0)}
      minValue={new Date(2020, 11, 11, 0, 0, 0)}
    />
    <TimePicker
      value={new Date(2020, 11, 11, 12, 0, 0)}
      minValue={new Date(2020, 11, 11, 12, 0, 0)}
    /> */}
  </div>
);

export default App;
