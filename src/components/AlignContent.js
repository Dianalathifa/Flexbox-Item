import React, { useState } from 'react';
import '../style/AlignContent.css'; // Import file CSS terpisah

const AlignContentLayout = () => {
  const [alignContent, setAlignContent] = useState('flex-start');

  const handleAlignContentChange = (value) => {
    setAlignContent(value);
  };

  return (
    <div className="align-content-layout">
      <h2>Align Content Layout</h2>
      <div className="preview-layout">
        <label htmlFor="align-content">alignContent</label>
        <select
          id="align-content"
          value={alignContent}
          onChange={(e) => handleAlignContentChange(e.target.value)}
        >
          {[
            'flex-start',
            'flex-end',
            'stretch',
            'center',
            'space-between',
            'space-around',
          ].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <div
          className={`container ${alignContent}`}
          style={{ maxHeight: 400 }}
        >
          <div className={`box`} style={{ backgroundColor: 'orangered' }}></div>
          <div className={`box`} style={{ backgroundColor: 'orange' }}></div>
          <div
            className={`box`}
            style={{ backgroundColor: 'mediumseagreen' }}
          ></div>
          <div
            className={`box`}
            style={{ backgroundColor: 'deepskyblue' }}
          ></div>
          <div
            className={`box`}
            style={{ backgroundColor: 'mediumturquoise' }}
          ></div>
          <div
            className={`box`}
            style={{ backgroundColor: 'mediumslateblue' }}
          ></div>
          <div className={`box`} style={{ backgroundColor: 'purple' }}></div>
        </div>
      </div>
    </div>
  );
};

export default AlignContentLayout;