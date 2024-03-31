import { Provider } from "react-redux";
import item1 from "../image/item1.jpg";
import item2 from "../image/item2.png";
import item3 from "../image/item3.png";
import item4 from "../image/item4.png";
import item5 from "../image/item5.png";
import item6 from "../image/item6.png";
import AllProducts from "./allProducts";
import { store } from "../store";

function Content({ products }) {
  return (
    <div class="content center">
      <div class="subtitle">Fetured Items</div>
      <div class="text_info">
        Shop for items based on what we featured in this week
      </div>
      <Provider store={store}>
        <AllProducts products={products} />
      </Provider>
    </div>
  );
}

export default Content;
