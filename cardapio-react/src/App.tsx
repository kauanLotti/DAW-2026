import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { NavigationBar } from "./components/layout/navigationBar";
import { categories } from "./data/categories";

function App() {

  function handleSelectCategory(alias: string) {
    alert('Categoria: ' + alias)
  }

  return (
    <>
      <Header />

      <NavigationBar 
      categories={categories}
      activeCategory="todos"
      onSelectCategory = {handleSelectCategory}
      />


      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>
              Categoria <span id="selected-category">Todos</span>: 10 itens
            </p>
          </header>

          <article>
            <figure>
              <img src="./assets/img/burguer.png" alt="Burguer" />
              <figcaption>Lanches</figcaption>
            </figure>

            <h3>Burguer</h3>
            <p>Pão brioche, hambúrguer 160g, queijo prato e molho da casa.</p>
            <p>R$ 22,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/burguer-bacon.png" alt="Bacon Burguer" />
              <figcaption>Lanches</figcaption>
            </figure>

            <h3>Bacon Burguer</h3>
            <p>
              Pão brioche, hambúrguer 160g, bacon, queijo cheddar e molho da
              casa.
            </p>
            <p>R$ 25,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/burguer-double.png" alt="Duplo Burguer" />
              <figcaption>Lanches</figcaption>
            </figure>

            <h3>Duplo Burguer</h3>
            <p>
              Dois hambúrgueres de 160g cada, cheddar, bacon e cebola
              caramelizada
            </p>
            <p>R$ 29,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/batata-rustica.png" alt="Batata Rustica" />
              <figcaption>Lanches</figcaption>
            </figure>

            <h3>Batata Rústica</h3>
            <p>Porção de batata com alecrim, parmesão e maionese verde.</p>
            <p>R$ 18,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img
                src="./assets/img/batata-tradicional.png"
                alt="Batata Trandicional"
              />
              <figcaption>Lanches</figcaption>
            </figure>

            <h3>Batata Tradicional</h3>
            <p>Porção de batata e maionese verde.</p>
            <p>R$ 15,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/agua.png" alt="Agua Sem Gas" />
              <figcaption>Lanches</figcaption>
            </figure>

            <h3>Água Sem Gás</h3>
            <p>Garrafa descartável de água sem gás com 500 ml.</p>
            <p>R$ 8,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/refri.png" alt="Refrigerante" />
              <figcaption>Lanches</figcaption>
            </figure>

            <h3>Refrigerante 300 ml</h3>
            <p>Copo de refrigerante de 300 ml</p>
            <p>R$ 10,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/chopp.png" alt="Chopp" />
              <figcaption>Lanches</figcaption>
            </figure>

            <h3>Chopp 300 ml</h3>
            <p>Caneca de 300 ml do nosso chopp pilsen geladíssimo.</p>
            <p>R$ 15,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/petit-gateau.png" alt="Petit Gateau" />
              <figcaption>Lanches</figcaption>
            </figure>

            <h3>Petit Gateau</h3>
            <p>Petit Gateau com uma bola de sorvete de creme.</p>
            <p>R$ 25,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img
                src="./assets/img/mousse-maracuja.png"
                alt="Mousse de Maracujá"
              />
              <figcaption>Lanches</figcaption>
            </figure>

            <h3>Mousse de Maracujá</h3>
            <p>Mousse de maracujá feito com a fruta de verdade.</p>
            <p>R$ 18,00</p>
            <button type="button">Adicionar</button>
          </article>
        </section>

        <aside>
          <h2>Seu pedido</h2>

          <div className="cart-empty">
            <img src="./assets/img/cart.svg" />
            <p>Seu carrinho está vazio</p>
            <p>Escolha um item do cardápio para começar</p>
          </div>
        </aside>
      </main>

      <Footer />

    </>
  );
}

export default App;
