import React from 'react';

class AbsoluteRelativeLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'relative',
    };
  }

  render() {
    const { position } = this.state;

    return (
      <div className="container">
        <label className="label">position</label>
        <div className="row">
          <div
            className={`box ${position === 'relative' ? 'relative' : 'absolute'}`}
            style={{ top: 25, left: 25, backgroundColor: 'powderblue' }}
          />
          <div
            className={`box ${position === 'relative' ? 'relative' : 'absolute'}`}
            style={{ top: 50, left: 50, backgroundColor: 'skyblue' }}
          />
          <div
            className={`box ${position === 'relative' ? 'relative' : 'absolute'}`}
            style={{ top: 75, left: 75, backgroundColor: 'steelblue' }}
          />
        </div>
        <div className="row">
        <button
            onClick={() => this.setState({ position: 'relative' })}
            className={`button ${position === 'relative' && 'selected'}`}
          >
            relative
          </button>
          <button
            onClick={() => this.setState({ position: 'absolute' })}
            className={`button ${position === 'absolute' && 'selected'}`}
          >
            absolute
          </button>

        </div>
      </div>
    );
  }
}

export default AbsoluteRelativeLayout;
