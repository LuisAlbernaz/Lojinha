import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaCarrinho from './paginas/PaginaCarrinho';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const roteador = createBrowserRouter([  
  {path: '/', element: <PaginaInicial/>},
  {path: '/carrinho', element: <PaginaCarrinho/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={roteador} />
  </React.StrictMode>
);


reportWebVitals();
