import Header from "./components/header";
import Main from "./components/main";
import './style/style-main.css';
import Categories from './components/categories';
import './style/style-categories.css'
import Content from './components/content';
import './style/style-content.css';
import './style/base.css';
import Botton from "./components/botton-content";
import './style/style-botton.css';
import Conditions from './components/conditions';
import './style/style-conditions.css';
import SubscribeReview from './components/review-and-subscribe';
import './style/style-subscribe-review.css';
import Footer from "./components/footer";
import './style/footer.css';
// import Menu from "./components/menu";
// import item1 from "./image/item1.jpg";
// import item2 from "./image/item2.png";
// import item3 from "./image/item3.png";
// import item4 from "./image/item4.png";
// import item5 from "./image/item5.png";
// import item6 from "./image/item6.png";

function MainPage({products}) {
  // const products = [
  //   {
  //     id: 1,
  //     name: "ELLERY X M'O CAPSULE",
  //     dicription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
  //     cost: 52.0,
  //     image: item1,
  //   },
  //   {
  //     id: 2,
  //     name: "ELLERY X M'O CAPSULE",
  //     dicription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
  //     cost: 52.0, 
  //     image: item3,
  //   },
  //   {
  //     id: 3,
  //     name: "ELLERY X M'O CAPSULE",
  //     dicription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
  //     cost: 52.0,
  //     image: item3,
  //   },
  //   {
  //     id: 4,
  //     name: "ELLERY X M'O CAPSULE",
  //     dicription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
  //     cost: 52.0,
  //     image: item4,
  //   },
  //   {
  //     id: 5,
  //     name: "ELLERY X M'O CAPSULE",
  //     dicription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
  //     cost: 52.0,
  //     image: item5,
  //   },
  //   {
  //     id: 6,
  //     name: "ELLERY X M'O CAPSULE",
  //     dicription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
  //     cost: 52.0,
  //     image: item6,
  //   },
  // ];
    return ( 
        <div className="top">
        <Header />
        {/* <Menu/> */}
        <Main />
        <Categories />
        <Content products={products}/>
        <Botton />
        <Conditions />
        <SubscribeReview />
        <Footer/>
      </div>
     );
}

export default MainPage;