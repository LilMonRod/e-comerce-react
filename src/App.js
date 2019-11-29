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
  const products = JSON.parse(localStorage.getItem('shoppingCart'));
  const global = {
    products: data,
    shoppingCart: products ? products : [],
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
        <Route path={"/"} exact component={Home}>
          {props =><Home {...global} {...props}/>}
        </Route>
        <Route path={"/Dulces"} component={Dulces}>
          {props =><Dulces {...global} {...props}/>}
        </Route>
        <Route path={"/Festivos"} component={Festivos}>
          {props =><Festivos {...global} {...props}/>}
        </Route>
        <Route path={"/Panes"} component={Panes}>
          {props =><Panes {...global} {...props}/>}
        </Route>
        <Route path={"/Salados"} component={Salados}>
          {props =><Salados {...global} {...props}/>}
        </Route>
        <Route path={"/CarritoDeCompras"} component={ShoppingCart}>
          {props =><ShoppingCart {...global} {...props}/>}
        </Route>
        <Route component={NotFound}>
          {props =><NotFound {...global} {...props}/>}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;