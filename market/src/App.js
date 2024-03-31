import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./mainpage";

import item1 from "./image/item1.jpg";
import item3 from "./image/item3.png";
import item4 from "./image/item4.png";
import item5 from "./image/item5.png";
import item6 from "./image/item6.png";
import Catalog from "./catalog";
import Product from "./product";
import Cart from "./components/cart";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const products = [
    {
      id: 1,
      name: "ELLERY X M'O CAPSULE",
      dicription:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      cost: 52.0,
      image: item1,
    },
    {
      id: 2,
      name: "ELLERY X M'O CAPSULE",
      dicription:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      cost: 52.0,
      image: item3,

    },
    {
      id: 3,
      name: "ELLERY X M'O CAPSULE",
      dicription:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      cost: 52.0,
      image: item3,

    },
    {
      id: 4,
      name: "ELLERY X M'O CAPSULE",
      dicription:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      cost: 52.0,
      image: item4,

    },
    {
      id: 5,
      name: "ELLERY X M'O CAPSULE",
      dicription:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      cost: 52.0,
      image: item5,

    },
    {
      id: 6,
      name: "ELLERY X M'O CAPSULE",
      dicription:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      cost: 52.0,
      image: item6,

    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage products={products} />} />
        <Route path="catalog" element={<Catalog products={products} />} />
        {products.map((product) => (
          <Route
            path={"/product" + product.id}
            element={<Product products={products} />}
          />
        ))}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
