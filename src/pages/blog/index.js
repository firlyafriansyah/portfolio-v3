import Data from "../../data/index.js";

const Blog = () => {
  const element = document.querySelector(".main_content");
  const data = Data().articles;
  element.innerHTML = `
    <div class="blog"></div>
  `;

  const cardsElement = document.querySelector(".blog");

  data.map((res) => {
    cardsElement.innerHTML += `
      <div class="cards">
        <img src="${res.picture}" alt="" class="img_blog" />
        <div class="blog_content">
          <h1 class="title_blog">${res.title}</h1>
          <p class="desc_blog">${res.desc}</p>
          <a href="/src/pages/blog/blog-${res.id}.html" class="blog_detail" > Read More </a>
        </div>
      </div>
  `;
  });
};

export default Blog;
