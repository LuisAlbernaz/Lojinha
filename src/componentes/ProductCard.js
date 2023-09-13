import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Modal } from 'antd';
import './App.css';
import ProductDetail from './ProductDetail';


export default function App() {
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);

    const [detalhesModalAberta, setDetalhesModalAberta] = useState(false);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then((dados) => {
                setProdutos(dados.data);
            })
    }, []);

    const adicionarAoCarrinho = (produto) => {
        const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
        const novoCarrinho = [...carrinhoAtual, produto];
        //setCarrinho([...carrinho, produto]);
        localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
        console.log(`Adicionando ${produto.title} ao carrinho.`);
    }

      const [produtoSelecionado, setProdutoSelecionado] = useState(null);


      const exibirDetalhesDoProdutoNovo = (produto) => {
        setProdutoSelecionado(produto);
        setDetalhesModalAberta(true);
    };

    const fecharDetalhesModal = () => {
        setProdutoSelecionado(null);
        setDetalhesModalAberta(false);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    {produtos.map((produto) => (
                        <div className="col-12 col-md-6 col-lg-3" key={produto.id}>
                            <img src={produto.image} className="card-img-top card-image" alt={produto.title} style={{width: '100%', height: '300px', objectFit: 'scale-down'}} />
                            <div className="card" style={{ width: '100%'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{produto.title}</h5>
                                    <p className="card-text">{produto.description.slice(0, 100)}...</p>
                                    <p className="card-text">${produto.price}</p>
                                    <p className="card-text">Categoria: {produto.category}</p>
                                    <div className="col-12 d-flex justify-content-between"> 
                                        <button type="button" className="btn btn-primary" onClick={() => adicionarAoCarrinho(produto)}>
                                            Comprar
                                        </button>
                                        <button type="button" className="btn btn-dark" onClick={() => exibirDetalhesDoProdutoNovo(produto)}>
                                            Sobre
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {produtoSelecionado && (
                <Modal
                title="Detalhes do Produto"
                visible={detalhesModalAberta}
                onCancel={fecharDetalhesModal}
                footer={null}
                className="ant-modal-centered" // Adicione a classe aqui
            >
                {produtoSelecionado && <ProductDetail produto={produtoSelecionado} />}
            </Modal>
            )}   
        </>
    );
    
} 

