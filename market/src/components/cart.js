import Header from "./header";
import "../style/style-heading.css";
import "../style/style-cart.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import ProductForCart from "./cartForProvider";
import { store } from "../store";
import SubscribeReview from './review-and-subscribe';
import Footer from './footer';


function Cart() {

    

  return (
    <>
      <Header />
      <div class="heading center">
        <h3 class="heading__title">NEW ARRIVALS</h3>
      </div>
      <Provider store={store}>
        <ProductForCart />
      </Provider>
      <SubscribeReview />
      <Footer/>
    </>
  );
}

export default Cart;
