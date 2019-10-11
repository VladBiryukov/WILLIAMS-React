import React from 'react';
import Index from './Pages/Index';
import WhoWeAre from './Pages/WhoWeAre';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/WhoWeAre' component={WhoWeAre} />
        <Route path='/Index' component={Index} />
      </div>
    </BrowserRouter>

  );
}

export default App;
