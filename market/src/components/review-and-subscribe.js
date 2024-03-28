import photoReview from '../image/photoReview.png';


function SubscribeReview() {
  return (
    <div class="subscribe_and_review center">
      <div class="review">
        <img
          src={photoReview}
          alt="photo review"
          class="photo_review"
        />
        <p class="text_review1">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
          <span class="text_review2"> a pulvinar purus condimentum“</span>
        </p>
      </div>
      <div class="subscribe">
        <h2 class="title_subscribe">SUBSCRIBE</h2>
        <p class="text_subscribe">FOR OUR NEWLETTER AND PROMOTION</p>
        <div class="submit">
          <form class="form_subscribe" action="#">
            <input
              required
              type="email"
              placeholder="Enter your email"
              class="input_mail"
            />
            <button class="button_subscribe" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubscribeReview;
