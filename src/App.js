import React from "react";
import { useEffect } from 'react';
import './App.css';
import Content from "./Content/Content";

function App() {
  useEffect(() => {
    document.title = 'Nickatronic.com';
  }, []);
  return (
    <div>
      <Content />
    </div>
  );
}

export default App;
