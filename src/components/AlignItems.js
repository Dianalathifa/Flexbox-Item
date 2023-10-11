import React, { useState } from 'react';
import '../style/AlignItems.css'; // Sesuaikan dengan path file CSS Anda

const AlignItemsLayout = () => {
  const [alignItems, setAlignItems] = useState('stretch');

  return (
    <div className="preview-layout">
      <label htmlFor="align-items">alignItems</label>
      <select
        id="align-items"
        value={alignItems}
        onChange={(e) => setAlignItems(e.target.value)}
      >
        {['stretch', 'flex-start', 'flex-end', 'center', 'baseline'].map(
          (value) => (
            <option key={value} value={value}>
              {value}
            </option>
          )
        )}
      </select>
      <div className="container" style={{ alignItems: alignItems }}>
        <div className="box powderblue"></div>
        <div className="box skyblue"></div>
        <div className="box steelblue"></div>
      </div>
    </div>
  );
};

export default AlignItemsLayout;