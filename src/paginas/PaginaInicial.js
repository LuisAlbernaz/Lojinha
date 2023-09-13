import ProductCard from "../componentes/ProductCard";
import Menu from "../componentes/Menu";

export default function PaginaInicial(){
  return <>
    <div className="App">
      <Menu />
      <ProductCard />
    </div>
  </>
}
