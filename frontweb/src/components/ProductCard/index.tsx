import './style.css';
import ProductImg from '../../assets/imagens/product.png'
import ProductPrice from 'components/ProductPrice';
const ProductCard = () =>{
    return(
        <section className='base-card product-card'>
            <div className='card-top-container'>
                <img src={ProductImg} alt="Imagem do produto"/>
            </div>
            <div className='card-botton-container'>
                <ProductPrice/>
            </div>
        </section>
    );
}
export default ProductCard;