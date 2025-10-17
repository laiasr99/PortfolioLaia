
document.getElementById('year').textContent = new Date().getFullYear();

const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});


const proyectos = [
  {
    title: "Proyecto 1: Un viaje de Película",
    desc: "Un viaje por diferentes lugares del mundo pasando por tus películas favoritas.",
    link: "https://github.com/laiasr99/Un-viaje-de-pelicula"
  },
  {
    title: "Proyecto 2: Mi portfolio",
    desc: "Mi portfolio: Un lugar donde poder mostrar mis proyectos frontend.",
    link: "https://github.com/laiasr99/PortfolioLaia"
  },
  {
    title: "Proyecto 3",
    desc: "Estética cuidada, texturas visuales y atención al detalle.",
    link: "#"
  }
];

const proyectosSection = document.getElementById("proyectos");

const h2Proyectos = document.createElement("h2");
h2Proyectos.className = "section-title";
h2Proyectos.textContent = "Proyectos";
proyectosSection.appendChild(h2Proyectos);

const proyectosGrid = document.createElement("ul");
proyectosGrid.className = "proyectos-grid";

proyectos.forEach(proyecto => {
  const li = document.createElement("li");
  li.className = "proyecto-card";

  const article = document.createElement("article");
  article.className = "proyecto-content";

  const h3 = document.createElement("h3");
  h3.className = "project-title";
  h3.textContent = proyecto.title;

  const p = document.createElement("p");
  p.className = "project-desc";
  p.textContent = proyecto.desc;

  const a = document.createElement("a");
  a.className = "project-link";
  a.href = proyecto.link;
  a.textContent = "Ver más";

  article.append(h3, p, a);
  li.appendChild(article);
  proyectosGrid.appendChild(li);
});

proyectosSection.appendChild(proyectosGrid);

const habilidades = ["HTML", "CSS", "JavaScript", "Git"];

const habilidadesSection = document.getElementById("habilidades");

const h2Habilidades = document.createElement("h2");
h2Habilidades.className = "section-title";
h2Habilidades.textContent = "Habilidades";
habilidadesSection.appendChild(h2Habilidades);

const skillsList = document.createElement("ul");
skillsList.className = "skills-list";

habilidades.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

habilidadesSection.appendChild(skillsList);

