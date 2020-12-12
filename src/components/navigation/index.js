import {
  Home,
  Education,
  Skill,
  Contact,
  Profile,
  Blog,
} from "../../pages/index.js";
import ActiveNav from "../activeNav/index.js";

const Navigation = () => {
  const navigation = document.querySelectorAll(".nav_item a");

  navigation.forEach((res) => {
    res.addEventListener("click", () => {
      switch (res.id) {
        case "home":
          Home();
          ActiveNav(`${res.id}_item`);
          break;
        case "profile":
          Profile();
          ActiveNav(`${res.id}_item`);
          break;
        case "education":
          Education();
          ActiveNav(`${res.id}_item`);
          break;
        case "skill":
          Skill();
          ActiveNav(`${res.id}_item`);
          break;
        case "contact":
          Contact();
          ActiveNav(`${res.id}_item`);
          break;
        case "blog":
          Blog();
          ActiveNav(`${res.id}_item`);
          break;
        default:
          Home();
          ActiveNav(`home_item`);
          break;
      }
    });
  });
};

export default Navigation;
