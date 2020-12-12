const Blog = () => {
  const element = document.querySelector(".main_content");

  element.innerHTML = `
    <div class="blog">
      <div class="cards">
        <img src="https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png" alt="" class="img_blog" />
        <div class="blog_content">
          <h1 class="title_blog">Apa itu Github?</h1>
          <p class="desc_blog">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eius aspernatur voluptas, fuga laborum dolores quod? Provident pariatur recusandae tenetur repudiandae ullam qui veritatis aut. Necessitatibus doloremque quos obcaecati sed!</p>
          <a href="#" class="blog_detail" > Read More </a>
        </div>
      </div>
      <div class="cards">
        <img src="https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png" alt="" class="img_blog" />
        <div class="blog_content">
          <h1 class="title_blog">Apa itu Github?</h1>
          <p class="desc_blog">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eius aspernatur voluptas, fuga laborum dolores quod? Provident pariatur recusandae tenetur repudiandae ullam qui veritatis aut. Necessitatibus doloremque quos obcaecati sed!</p>
          <a href="#" class="blog_detail" > Read More </a>
        </div>
      </div>
    </div>
  `;
};
export default Blog;
