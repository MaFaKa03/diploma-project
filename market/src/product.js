import { Provider } from "react-redux";
import Heading from "./components/bread-crumbs";
import Header from "./components/header";
import { store } from "./store";
import ProductCard from "./components/product-card";
import AllProducts from "./components/allProducts";
import SubscribeReview from "./components/review-and-subscribe";
import Footer from "./components/footer";

function Product({ products }) {
  return (
    <div className="top">
      <Header />
      <Heading />
      <Provider store={store}>
        <ProductCard />
        <AllProducts products={products} />
      </Provider>
      <SubscribeReview />
      <Footer />
    </div>
  );
}

export default Product;
