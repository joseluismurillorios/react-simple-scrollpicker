import React from 'react';
import { TimePicker } from '../lib';

const App = () => (
  <div className="app__fixed">
    <TimePicker />
    <TimePicker value={new Date()} minValue={new Date()} />
  </div>
);

export default App;
