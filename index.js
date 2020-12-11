import Navigation from "./src/components/navigation/index.js";
import { Home, Education, Skill } from "./src/pages/index.js";
import ActiveNav from "./src/components/activeNav/index.js";

document.addEventListener("DOMContentLoaded", () => {
  const url = window.location.hash;
  const id = `${url.slice(1)}_item`;
  switch (url) {
    case "#home":
      Home();
      ActiveNav(id);
      break;
    case "#education":
      Education();
      ActiveNav(id);
      break;
    case "#skill":
      Skill();
      ActiveNav(id);
      break;
    case "#contact":
      Contact();
      ActiveNav(id);
      break;
    case "#blog":
      Blog();
      ActiveNav(id);
      break;
    default:
      Home();
      ActiveNav("home_item");
      break;
  }

  Navigation();
});
