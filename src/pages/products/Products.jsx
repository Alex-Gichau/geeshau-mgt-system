import './products.scss'
import Products from '../../productData.json' 

function App() {
  return (
    <div className="App">
      {
        Products.map( products => {
          return (
            <div className="box" key={products.products}>
              <strong>{products.description}</strong><br/>
              {products.sellingPrice} <br /> <br />
            </div>
          )
        })
      }

    </div>
  );
}

export default App;