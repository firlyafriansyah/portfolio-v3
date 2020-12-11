const Contact = () => {
  const elemen = document.querySelector(".main_content");

  elemen.innerHTML = `
  <div class="contact">
          <div class="desc_contact">
            <a class="btn phone" href="tel:+6285695177537" target="_blank">
              <img src="./public/icons/phone.png" alt="" width="30" />
              Phone
            </a>
            <a
              class="btn mail"
              href="mailto:firlyafriansyah50@gmail.com"
              target="_blank"
            >
              <img src="./public/icons/gmail.png" alt="" width="30" />
              Gmail
            </a>
            <a
              class="btn wa"
              href="https://wa.me/6285695177537"
              target="_blank"
            >
              <img src="./public/icons/whatsapp.png" alt="" width="30" />
              Whatsapp
            </a>
            <a class="btn tele" href="https://t.me/FirlyAfria" target="_blank">
              <img src="./public/icons/telegram.png" alt="" width="30" />
              Telegram
            </a>
            <a
              class="btn fb"
              href="https://facebook.com/Firly.Afriansyah20"
              target="_blank"
            >
              <img src="./public/icons/facebook.png" alt="" width="30" />
              Facebook
            </a>
            <a
              class="btn twitt"
              href="https://twitter.com/Afrians69255945"
              target="_blank"
            >
              <img src="./public/icons/twitter.png" alt="" width="30" />
              Twitter
            </a>
            <a
              class="btn insta"
              href="https://www.instagram.com/firlyyy__/"
              target="_blank"
            >
              <img src="./public/icons/instagram.png" alt="" width="30" />
              Instagram
            </a>
            <a
              class="btn linked"
              href="https://www.linkedin.com/in/firly-afriansyah-139998192"
              target="_blank"
            >
              <img src="./public/icons/linkedin.png" alt="" width="30" />
              LinkedIn
            </a>
            <a
              class="btn git"
              href="https://github.com/firlyafriansyah"
              target="_blank"
            >
              <img src="./public/icons/github.png" alt="" width="30" />
              Github
            </a>
          </div>
        </div>
  `;
};

export default Contact;
