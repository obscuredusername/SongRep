import React from 'react';
import SongDetail from './Song';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <SongDetail style={{ flex: 1 }} />
    </div>
  );
};

export default Main;
