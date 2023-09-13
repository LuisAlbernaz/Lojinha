import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { SkinOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: (
    <Link to="/"  rel="noopener noreferrer">
    Pagina Inicial
    </Link>),
    key: 'produto',
    icon: <SkinOutlined />  
  },
  
  {
    label: (
        <Link to="/carrinho" rel="noopener noreferrer">
        Pagina Carrinho
        </Link>
    ),
    key: 'shop',
    icon: <ShoppingCartOutlined /> 
  },
];
const App = () => {
  const [current, setCurrent] = useState('produto');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return<>
       <Menu onClick={onClick} mode="horizontal" items={items} />;
  </>

};
export default App;