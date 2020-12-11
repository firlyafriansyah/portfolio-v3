const ActiveNav = (id) => {
  const element = document.querySelectorAll(".nav_item");

  // console.log(element);
  element.forEach((res) => {
    if (res.id === id) {
      res.classList.add("active");
    } else {
      res.classList.remove("active");
    }
  });
};

export default ActiveNav;
