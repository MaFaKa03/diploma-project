import RectangleForVew from '../image/RectangleForVew.png';

function Botton() {
  return (
    <div class="botton">
      <a href="#">
        <div class="button_all_products">
          <img
            src={RectangleForVew}
            alt="rectangle"
            class="rectangle_for_view_all"
          />
          <div class="container_all_products">
            <p class="text_all_products">Browse All Product</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Botton;
