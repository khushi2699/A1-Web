import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import Loader from './shared/loader/Loader';

const App = () => {
  const [isLoaded, setLoaded] = useState(false);

  return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
  );
};

export default App;
