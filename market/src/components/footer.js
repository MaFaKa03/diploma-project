import facebook from '../image/social midea/facebook.svg';
import instagram from '../image/social midea/instagram.svg';
import pinterest from '../image/social midea/pinterest.svg';
import twitter from '../image/social midea/twitter.svg';



function Footer() {
  return (
    <footer class="footer_site center">
      <p class="text_in_footer">© 2022 Brand All Rights Reserved.</p>
      <div class="logos">
        <a class="link_social" href="#">
          <img
            src={facebook}
            alt="facebook logo"
            class="logo_social_media"
          />
        </a>
        <a class="link_social" href="#">
          <img
            class="logo_social_media"
            src={instagram}
            alt="instagram icon"
          />
        </a>
        <a class="link_social" href="#">
          <img
            class="logo_social_media"
            src={pinterest}
            alt="pinterest icon"
          />
        </a>
        <a class="link_social" href="#">
          <img
            class="logo_social_media"
            src={twitter}
            alt="twitter icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
