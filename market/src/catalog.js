import { Provider } from "react-redux";
import Heading from "./components/bread-crumbs";
import ContentForCatalog from "./components/content-catalog";
import Header from "./components/header";
import { store } from "./store";

function Catalog({ products }) {
  return (
    <div className="top">
      <Header />
      <Heading />
      <Provider store={store}>
        <ContentForCatalog products={products} />
      </Provider>
    </div>
  );
}

export default Catalog;
