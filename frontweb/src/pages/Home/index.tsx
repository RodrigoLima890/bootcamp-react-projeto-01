import "./style.css";
import { ReactComponent as MainImage } from "../../assets/imagens/main.svg";
import Navbar from "components/Navbar";
import ButtonIcon from "components/ButtonIcon";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container-main">
        <section className="container-card">
          <div className="home-content-container">
            
              <h1>Conheça o melhor catálogo de produtos</h1>
              <p>
                Ajudaremos você a encontrar os melhores produtos disponiveis no
                mercado
              </p>
              <ButtonIcon />
            </div>
          
          <div className="home-image-container">
            <MainImage />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
