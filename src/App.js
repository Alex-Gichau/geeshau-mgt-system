import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import Invoices from './pages/invoices/Invoices'
import Products from './pages/products/Products'
import { Order } from './pages/order/Order'
import { Clients } from './pages/clients/Clients';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="invoices" element={<Invoices/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="order" element={<Order/>}/>
            <Route path='clients' element={<Clients/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
