import delivery from '../image/conditions/delivery.svg';
import sales from '../image/conditions/sales.svg';
import assurance from '../image/conditions/assurance.svg';




function Conditions() {
  return (
    <div class="conditions center">
      <article class="condition delivery">
        <img
          src={delivery}
          alt="image delivery"
          class="image_conditions"
        />
        <h3 class="title_conditions">Free Delivery</h3>
        <p class="text_conditions">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </article>
      <article class="condition sales">
        <img
          src={sales}
          alt="image sales"
          class="image_conditions"
        />
        <h3 class="title_conditions">Sales & discounts</h3>
        <p class="text_conditions">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </article>
      <article class="condition assurance">
        <img
          src={assurance}
          alt=""
          class="image_conditions"
        />
        <h3 class="title_conditions">Quality assurance</h3>
        <p class="text_conditions">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </article>
    </div>
  );
}

export default Conditions;
