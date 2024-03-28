import forMan from '../image/forMan.jpg';
import forWomen from '../image/forWomen.jpg';
import child from '../image/child.jpg';
import items from '../image/items.jpg';




function Categories() {
  return (
    <div class="categories center">
      <a href="#">
        <div class="category">
          <img
            src={forWomen}
            alt="women"
            class="background_category"
          />
          <div class="sale_content">
            <div class="name_category">30% OFF</div>
            <div class="name_red">FOR WOMEN</div>
          </div>
        </div>
      </a>
      <a href="#">
        <div class="category">
          <img src={forMan} alt="men" class="background_category" />
          <div class="sale_content">
            <div class="name_category">HOT DEAL</div>
            <div class="name_red">FOR MEN</div>
          </div>
        </div>
      </a>
      <a href="#">
        <div class="category">
          <img src={child} alt="child" class="background_category" />
          <div class="sale_content">
            <div class="name_category">NEW ARRIVALS</div>
            <div class="name_red">FOR KIDS</div>
          </div>
        </div>
      </a>
      <a class="large_category" href="#">
        <div class="category">
          <img
            src={items}
            alt="items"
            class="background_category large_background"
          />
          <div class="sale_content">
            <div class="name_category">LUXIROUS & TRENDY</div>
            <div class="name_red">ACCESORIES</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Categories;
