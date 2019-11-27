import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dulces from './pages/Dulces';
import Festivos from './pages/Festivos';
import Panes from './pages/Panes';
import Salados from './pages/Salados';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import NotFound from './pages/Error';
import data from './data/data.json';

function App() {
  const global = {
    products: data,
    shoppingCart: [],
    categories: [
      {
        "category": "id",
        "tag": "Código de producto",
        "id": 1
      },
      {
        "category": "name",
        "tag": "Nombre de producto",
        "id": 2
      },
      {
        "category": "price",
        "tag": "Precio de producto",
        "id": 3
      },
      {
        "category": "default",
        "tag": "Tipo de producto",
        "id": 0
      }
    ]
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={props =><Home {...global} {...props}/>} />
        <Route path={"/Dulces"} component={props =><Dulces {...global} {...props}/>} />
        <Route path={"/Festivos"} component={props =><Festivos {...global} {...props}/>} />
        <Route path={"/Panes"} component={props =><Panes {...global} {...props}/>} />
        <Route path={"/Salados"} component={props =><Salados {...global} {...props}/>} />
        <Route path={"/ShoppingCart"} component={props =><ShoppingCart {...global} {...props}/>} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;