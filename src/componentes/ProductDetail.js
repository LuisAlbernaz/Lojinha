import React from 'react';

const ProductDetail = ({ produto }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100%' }}>
    <div className="card" style={{ width: '18rem' }}>
        <img src={produto.image} className="card-img-top" alt={produto.title}></img>
        <div className="card-body" >
            <h2>{produto.title}</h2>
            <p className="card-text">{produto.description}</p>
            <p className="card-text">${produto.price}</p>
            <p className="card-text">Categoria: {produto.category}</p>
        </div>
    </div>
    </div>
  );
};

export default ProductDetail;

