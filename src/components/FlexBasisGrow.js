import React, { useState } from 'react';
import '../style/FlexBasis.css'; // Import file CSS terpisah

const App = () => {
  const [powderblue, setPowderblue] = useState({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  });
  const [skyblue, setSkyblue] = useState({
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 100,
  });
  const [steelblue, setSteelblue] = useState({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 200,
  });

  const handleChange = (key, value, setStyle) => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      [key]: value,
    }));
  };

  return (
    <div className="container">
      <div className="flex-container">
        <div className="box-info" style={{ backgroundColor: 'powderblue' }}>
          <div className="box-label">
            <p className="box-text">Box</p>
          </div>
          <div className="label">flexBasis</div>
          <input
            type="text"
            value={powderblue.flexBasis}
            onChange={(e) => handleChange('flexBasis', e.target.value, setPowderblue)}
          />
          <div className="label">flexShrink</div>
          <input
            type="text"
            value={powderblue.flexShrink}
            onChange={(e) => handleChange('flexShrink', e.target.value, setPowderblue)}
          />
          <div className="label">flexGrow</div>
          <input
            type="text"
            value={powderblue.flexGrow}
            onChange={(e) => handleChange('flexGrow', e.target.value, setPowderblue)}
          />
        </div>
        <div className="box-info" style={{ backgroundColor: 'skyblue' }}>
          <div className="box-label">
            <p className="box-text">Box</p>
          </div>
          <div className="label">flexBasis</div>
          <input
            type="text"
            value={skyblue.flexBasis}
            onChange={(e) => handleChange('flexBasis', e.target.value, setSkyblue)}
          />
          <div className="label">flexShrink</div>
          <input
            type="text"
            value={skyblue.flexShrink}
            onChange={(e) => handleChange('flexShrink', e.target.value, setSkyblue)}
          />
          <div className="label">flexGrow</div>
          <input
            type="text"
            value={skyblue.flexGrow}
            onChange={(e) => handleChange('flexGrow', e.target.value, setSkyblue)}
          />
        </div>
        <div className="box-info" style={{ backgroundColor: 'steelblue' }}>
          <div className="box-label">
            <p className="box-text">Box</p>
          </div>
          <div className="label">flexBasis</div>
          <input
            type="text"
            value={steelblue.flexBasis}
            onChange={(e) => handleChange('flexBasis', e.target.value, setSteelblue)}
          />
          <div className="label">flexShrink</div>
          <input
            type="text"
            value={steelblue.flexShrink}
            onChange={(e) => handleChange('flexShrink', e.target.value, setSteelblue)}
          />
          <div className="label">flexGrow</div>
          <input
            type="text"
            value={steelblue.flexGrow}
            onChange={(e) => handleChange('flexGrow', e.target.value, setSteelblue)}
          />
        </div>
      </div>
      <div className="preview-container">
        <div
          className="box"
          style={{
            flexBasis: `${powderblue.flexBasis}px`,
            flexGrow: powderblue.flexGrow,
            flexShrink: powderblue.flexShrink,
            backgroundColor: 'powderblue',
          }}
        ></div>
        <div
          className="box"
          style={{
            flexBasis: `${skyblue.flexBasis}px`,
            flexGrow: skyblue.flexGrow,
            flexShrink: skyblue.flexShrink,
            backgroundColor: 'skyblue',
          }}
        ></div>
        <div
          className="box"
          style={{
            flexBasis: `${steelblue.flexBasis}px`,
            flexGrow: steelblue.flexGrow,
            flexShrink: steelblue.flexShrink,
            backgroundColor: 'steelblue',
          }}
        ></div>
      </div>
    </div>
  );
};

export default App;