import React from 'react';
import './App.css'; // File CSS utama
import AlignItems from './components/AlignItems'; 
import AlignSelf from './components/AlignSelf'; 
import AlignContent from './components/AlignContent';
import FlexWrap from './components/FlexWrap';
import FlexBasis from './components/FlexBasisGrow';
import Gap from './components/GapRowColumn';
import Layout from './components/AbsoluteRelativeLayout';

function App() {
  return (
    <div className="App">
      <h1>Contoh Penerapan Flexbox Align Items</h1>
      <AlignItems />
      <h1>Contoh Penerapan Flexbox Align Self</h1>
      <AlignSelf />
      <h1>Contoh Penerapan Flexbox Align Content</h1>
      <AlignContent />
      <h1>Contoh Penerapan Flexbox Flex Wrap</h1>
      <FlexWrap />
      <h1>Contoh Penerapan Flexbox Flex Basis, Grow, dan Shrink</h1>
      <FlexBasis/>
      <h1>Contoh Penerapan Flexbox Row Gap, Column Gap, dan Gap</h1>
      <Gap/>
      <h1>Contoh Penerapan Flexbox Flex Absolute dan Relative Layout</h1>
      <Layout/>
      {/* Komponen-komponen lain */}
    </div>
  );
}

export default App;