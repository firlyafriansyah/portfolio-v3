const Home = () => {
  const element = document.querySelector(".main_content");

  element.innerHTML = `
    <div class="home">
      <div class="desc">
        <h1><span>I</span> am</h1>
        <h1>a Web <span>Developer</span></h1>
        <p>"Keep coding, stay awesome"</p>
        <a href="https://www.linkedin.com/in/firly-afriansyah-139998192" target="_blank">My Profile</button>
      </div>
    </div>
  `;
};

export default Home;
