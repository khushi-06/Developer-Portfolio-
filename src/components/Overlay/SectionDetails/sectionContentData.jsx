// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "ABOUT ME",
    content: (
      <p>
        I'm a skilled Frontend Developer passionate about crafting engaging and user-friendly web experiences.
         With a keen eye for design and a strong command of HTML, CSS, and JavaScript, I specialize in building responsive and intuitive interfaces.
      </p>
    ),
  },
  { key: "team", title: "PROJECTS", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Credits",
    content: (
      <ul className="credits">
        <li>
          <a href="https://www.chingu.io/">Chingu</a>
        </li>
        <li>
          <a href="https://threejs-journey.com/">Bruno Simon</a>
        </li>
        <li>
          <a href="https://poly.pizza">Poly Pizza</a>
        </li>
        <li>
          <a href="https://www.syntystudios.com">Synty Studios</a>
        </li>
        <li>
          <a href="https://streakbyte.com">Streak Byte</a>
        </li>
        <li>
          <a href="https://github.com/chingu-voyages/v43-tier3-team-29">
            More Credits
          </a>
        </li>
      </ul>
    ),
  },
];

export default sectionsContentData;
