import React from 'react';
import './App.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Product from './components/Product/Product';
import ProductsList from './components/Product/ProductsList/ProductsList';
import ProductDetails from './components/Product/ProductDetails/ProductDetails';
import NotFound from './components/NotFound/NotFound';

const Home = () => { return ( <h1> Welcome to the <s>Candy</s> Shoe Shop! </h1> ); }
const Blog = () => ( <h1> Hi I'm in Blog </h1> );

function App() {
  return (
    <Router>
      <div>
          {/* <ul className='navbar'> */}
              {/* <li> <Link to='/'> Home </Link> </li> */}
              {/* <NavLink to='/' as='li'> Home </NavLink>
              <NavLink to='blog' as='li'> Blog </NavLink> */}
          {/* </ul> */}
          <nav className='navbar'>
            <Link to="/">Home </Link>
            <Link to="blogs">Blog (404 test) </Link>
            <Link to="products">Products </Link>
          </nav>
          <Routes>
              <Route path='/' element = { <Home /> } />
              <Route path='blog' element = { <Blog /> } />
              <Route path='products' element = { <Product /> } >
                  <Route path="/" element = { <ProductsList /> } />
                  <Route path=":slug" element = { <ProductDetails /> } />
              </Route>
              <Route path='*' element = { <NotFound /> } />
          </Routes>
      </div>
    </Router>
  );
}


export default App;
