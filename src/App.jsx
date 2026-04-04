import Cart from "./components/Cart"
import ProductList from "./components/ProductList"

function App() {

  return (
    <>
      {/* Reserved for modal */}
      <main id="container" className="max-w-360 mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-8 w-81.75 md:w-172 lg:w-304 ">
        <ProductList />
        <Cart />
      </main>
    </>
  )
}

export default App
