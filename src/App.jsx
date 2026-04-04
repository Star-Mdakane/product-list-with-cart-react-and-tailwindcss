import Cart from "./components/Cart"
import CartModal from "./components/CartModal"
import ProductList from "./components/ProductList"

function App() {

  return (
    <>
      {/* <CartModal /> */}
      <main id="container" className="max-w-360 mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-8 w-81.75 md:w-172 lg:w-304 my-6 md:my-10 lg:my-22 ">
        <ProductList />
        <Cart />
      </main>
    </>
  )
}

export default App
