import React from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';

export default function App() {
  return (
    <div className="app h-screen bg-gray-background">
      <Header />
      <div className="flex justify-between">
        <Timeline />
      </div>
    </div>
  );
}
