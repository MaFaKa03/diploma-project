import { Link } from "react-router-dom";
import '../style/style-heading.css';

function Heading() {
  return (
    <div class="heading center">
      <h3 class="heading__title">NEW ARRIVALS</h3>
      <nav class="heading__product-nav">
        <Link to="/" class="heading__product-nav_item">
          HOME
        </Link>
        <Link to="catalog" class="heading__product-nav_item">
          MEN
        </Link>
        <Link to="catalog" class="heading__product-nav_item item__new">
          NEW ARRIVALS
        </Link>
      </nav>
    </div>
  );
}

export default Heading;
