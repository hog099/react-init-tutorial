import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './styles/globalstyles.css';


import Routes from "./routes/index";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;

