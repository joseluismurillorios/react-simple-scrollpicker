import React, { useState } from 'react';
import { TimePicker, ModalPicker } from '../lib';

const App = () => {
  const [modal, setModal] = useState(false);
  const date = new Date();
  return (
    <div className="app__fixed">
      <TimePicker value={date} minValue={date} />
      <button onClick={() => setModal(true)}>Open</button>
      <ModalPicker isVisible={modal} toggleModal={() => setModal(false)} value={date} minValue={date} />
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
};

export default App;
