import React, { useState } from 'react';
import '../style/GapRowColumn.css'; // Import file CSS terpisah

const RowGapAndColumnGap = () => {
  const [rowGap, setRowGap] = useState(10);
  const [columnGap, setColumnGap] = useState(10);

  return (
    <div className="preview-container">
      <div className="input-container">
        <div className="items-center">
          <label htmlFor="rowGap">Row Gap</label>
          <input
            type="number"
            id="rowGap"
            value={rowGap}
            onChange={(e) => setRowGap(Number(e.target.value))}
          />
        </div>
        <div className="items-center">
          <label htmlFor="columnGap">Column Gap</label>
          <input
            type="number"
            id="columnGap"
            value={columnGap}
            onChange={(e) => setColumnGap(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="container" style={{ rowGap, columnGap }}>
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
        <div className="box box5"></div>
      </div>
    </div>
  );
};

export default RowGapAndColumnGap;