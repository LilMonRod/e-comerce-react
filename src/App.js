import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dulces from './pages/Dulces';
import Festivos from './pages/Dulces';
import Panes from './pages/Panes';
import Salados from './pages/Salados';
import Home from './pages/Home';
import NotFound from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Home} exact />
        <Route path={"/Dulces"} component={Dulces} />
        <Route path={"/Festivos"} component={Festivos} />
        <Route path={"/Panes"} component={Panes} />
        <Route path={"/Salados"} component={Salados} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;