const Skill = () => {
  const element = document.querySelector(".main_content");

  element.innerHTML = `
    <div class="skill">
      <div class="desc_skill">
        <div class="skill_item">
          <img src="./public/icons/html-5.png" alt="" />
          <p>HTML</p>
        </div>
        <div class="skill_item">
          <img src="./public/icons/css-3.png" alt="" />
          <p>CSS</p>
        </div>
        <div class="skill_item">
          <img src="./public/icons/javascript.png" alt="" />
          <p>Javascript</p>
        </div>
        <div class="skill_item">
          <img src="./public/icons/react.png" alt="" />
          <p>React JS</p>
        </div>
        <div class="skill_item">
          <img src="./public/icons/bootstrap.png" alt="" />
          <p>Bootstrap</p>
        </div>
        <div class="skill_item">
          <img src="./public/icons/express.png" alt="" />
          <p>Express Js</p>
        </div>
      </div>
    </div>
  `;
};

export default Skill;
