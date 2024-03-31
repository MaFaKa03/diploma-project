import photo_man from '../image/main/photo_man.png';

function Main() {
    return ( 
        <div class="main">
        <div class="left">
          <img src={photo_man} alt="man" class="photo_man" />
        </div>
        <div class="right">
          <div class="promo_info">
            <h1 class="promo__title">THE BRAND</h1>
            <h2 class="promo__heading">OF LUXERIOUS FASHION</h2>
          </div>
        </div>
      </div>
     );
}

export default Main;