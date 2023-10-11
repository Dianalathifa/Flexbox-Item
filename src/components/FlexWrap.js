import React, { useState } from 'react';
import '../style/FlexWrap.css'; // Import file CSS terpisah

const FlexWrapLayout = () => {
  const [flexWrap, setFlexWrap] = useState('wrap');

  const handleFlexWrapChange = (value) => {
    setFlexWrap(value);
  };

  return (
    <div className="flex-wrap-layout">
      <h2>Flex Wrap Layout</h2>
      <div className="preview-layout">
        <label htmlFor="flex-wrap">flexWrap</label>
        <select
          id="flex-wrap"
          value={flexWrap}
          onChange={(e) => handleFlexWrapChange(e.target.value)}
        >
          {['wrap', 'nowrap'].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <div className={`container ${flexWrap}`} style={{ maxHeight: 400 }}>
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

export default FlexWrapLayout;