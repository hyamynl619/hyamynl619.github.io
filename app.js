const projects = [
  {
    number: "01",
    slug: "sharepoint-staff-hub",
    title: "Modern SharePoint Staff Hub",
    company: "Northstar Community Services",
    color: "#0078D4",
    description:
      "A centralized employee experience for resources, announcements, departments, forms and support.",
    tags: ["SharePoint Online", "Microsoft Lists", "Power Automate"],
  },
  {
    number: "02",
    slug: "help-desk-automation",
    title: "Microsoft 365 Help Desk Automation",
    company: "Evergreen Consulting Group",
    color: "#107C41",
    description: "Request intake, tracking and automated notifications.",
    tags: ["Power Apps", "SharePoint", "Teams"],
  },
  {
    number: "03",
    slug: "power-apps-business-form",
    title: "Custom Power Apps Business Form",
    company: "BrightPath Professional Services",
    color: "#742774",
    description:
      "Replacing incomplete email requests with structured business intake.",
    tags: ["Power Apps", "SharePoint", "Lists"],
  },
  {
    number: "04",
    slug: "excel-planner-automation",
    title: "Excel → Planner Automation",
    company: "Summit Operations Group",
    color: "#0B8F67",
    description: "Automatic Planner task creation from structured Excel data.",
    tags: ["Excel", "Planner", "Power Automate"],
  },
  {
    number: "05",
    slug: "campaign-tracker",
    title: "Interactive Campaign Tracker",
    company: "Community Forward Alliance",
    color: "#0099D8",
    description: "Visual campaign progress and milestone tracking.",
    tags: ["SharePoint", "HTML", "CSS", "JavaScript"],
  },
  {
    number: "06",
    slug: "documentation-handoff",
    title: "Documentation & Client Handoff",
    company: "Horizon Business Partners",
    color: "#375A7F",
    description:
      "Documentation and handoff materials for maintainable solutions.",
    tags: ["Documentation", "Microsoft 365"],
  },
];

const earlierProjects = [
  {
    title: "City Data Comparison",
    image: "ezgif.com-video-to-gif (9).gif",
    url: "2020-06-07-Citrics",
    desc: "A Lambda School Labs project completed with data science and web development students.",
    tags: ["Data Science", "Analytics"],
  },

  {
    title: "Do They Have An App For That?",
    image: "rami-al-zayat-w33-zg-dNL4-unsplash.jpg",
    url: "2020-02-06-App-Predictions",
    desc: "An earlier project exploring mobile application data and prediction models.",
    tags: ["Machine Learning", "Data Science"],
  },

  {
    title: "Where Is Everyone?",
    image: "v2.png",
    url: "2020-01-06-Missing-Migrants",
    desc: "Using data storytelling and analysis to explore migration trends.",
    tags: ["Data Analysis", "Visualization"],
  },

  {
    title: "Amy's Game Of Life",
    image: "ezgif.com-crop (1).gif",
    url: "2020-06-25-conway",
    desc: "A Conway's Game of Life implementation demonstrating programming concepts.",
    tags: ["JavaScript", "Programming"],
  },

  {
    title: "Attack of the Vampire Pizzas",
    image: "ezgif.com-crop (2).gif",
    url: "2020-07-02-Pizza",
    desc: "A Python and Pygame project built while learning game development fundamentals.",
    tags: ["Python", "Pygame"],
  },
];
const projectContainer = document.getElementById("projects");

projects.forEach((project) => {
  projectContainer.innerHTML += `
<div class="card">

<div class="card-banner"
style="background:${project.color}">

<small>PROJECT ${project.number}</small>

<h3>${project.title}</h3>

</div>

<div class="card-content">

<strong>${project.company}</strong>

<p>${project.description}</p>

<div class="tags">

${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}

</div>

<a href="case-study.html?p=${project.slug}"
   class="card-link">

   View Case Study →

</a>

</div>
</div>
`;
});
const earlierContainer = document.getElementById("earlierProjects");

earlierProjects.forEach((project) => {
  earlierContainer.innerHTML += `

    <div class="card">

        <img
            src="img/${project.image}"
            alt="${project.title}"
            class="project-image">

        <div class="card-content">

            <h3>${project.title}</h3>

            <p>${project.desc}</p>

            <div class="tags">

                ${project.tags
                  .map((tag) => `<span class="tag">${tag}</span>`)
                  .join("")}

            </div>

            <a
                href="${project.url}"
                class="card-link">

                View Original Project →

            </a>

        </div>

    </div>

    `;
});

earlierContainer.innerHTML += `

<div class="card">

    <div
        class="card-banner"
        style="background:#163A63;">

        <h3>
            Then → Now
        </h3>

    </div>

    <div class="card-content">

        <p>

            My earlier work developed a foundation in
            programming, analytics, experimentation,
            and technical problem solving.

        </p>

        <p>

            Today I apply those same skills to
            SharePoint, Power Platform, process automation,
            reporting, and Microsoft 365 business solutions.

        </p>

        <a
            href="#work"
            class="card-link">

            Explore Current Portfolio →

        </a>

    </div>

</div>

`;

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menu-btn");

const nav = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});
