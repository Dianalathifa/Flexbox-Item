import React, { useState } from 'react';
import '../style/AlignSelf.css'; // Import file CSS terpisah

const AlignSelfLayout = () => {
  const [alignSelf, setAlignSelf] = useState('stretch');

  const handleAlignSelfChange = (value) => {
    setAlignSelf(value);
  };

  return (
    <div className="align-self-layout">
      <h2>Align Self Layout</h2>
      <div className="preview-layout">
        <label htmlFor="align-self">alignSelf</label>
        <select
          id="align-self"
          value={alignSelf}
          onChange={(e) => handleAlignSelfChange(e.target.value)}
        >
          {['stretch', 'flex-start', 'flex-end', 'center', 'baseline'].map(
            (value) => (
              <option key={value} value={value}>
                {value}
              </option>
            )
          )}
        </select>
        <div
          className={`box ${alignSelf}`}
          style={{ minWidth: 50, backgroundColor: 'powderblue' }}
        ></div>
        <div className="box" style={{ backgroundColor: 'skyblue' }}></div>
        <div className="box" style={{ backgroundColor: 'steelblue' }}></div>
      </div>
    </div>
  );
};

export default AlignSelfLayout;