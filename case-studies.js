const caseStudies = {
  "sharepoint-staff-hub": {
    number: "01",

    image: "hub.png",

    title: "Modern SharePoint Staff Hub",

    company: "Northstar Community Services",

    color: "#0078D4",

    subtitle: "One place for employees to find what they need.",

    tools: ["SharePoint Online", "Microsoft Lists", "Power Automate"],

    overview:
      "A centralized employee experience for resources, announcements, forms, departments and support.",

    challenge:
      "Employees struggled to find documents and information scattered across multiple locations.",

    solution:
      "A structured staff hub with quick links, news, department resources and centralized navigation.",

    process: `Staff Hub
↓
Departments
↓
Resources
↓
Announcements
↓
Training & Support`,

    built: [
      "Homepage architecture",
      "Quick links",
      "Department navigation",
      "Resource center",
      "News experience",
    ],

    takeaway: "A good intranet makes the right content easy to find.",
  },

  "help-desk-automation": {
    number: "02",

    image: "helpdesk.png",

    title: "Microsoft 365 Help Desk Automation",

    company: "Evergreen Consulting Group",

    color: "#107C41",

    subtitle: "From request to resolution.",

    tools: ["SharePoint", "Power Apps", "Power Automate", "Teams"],

    overview: "A maintainable help desk process built with Microsoft 365.",

    challenge:
      "Support requests arrived through email with inconsistent information.",

    solution: "Structured intake and automated workflow routing.",

    process: `Employee Request
↓
SharePoint Tracking
↓
Power Automate
↓
Ticket Number
↓
Teams Notification`,

    built: [
      "Request forms",
      "Automated ticketing",
      "Notifications",
      "Tracking dashboard",
    ],

    takeaway: "Automation removes manual steps rather than adding complexity.",
  },

  "power-apps-business-form": {
    number: "03",

    image: "businessforms.png",

    title: "Custom Power Apps Business Form",

    company: "BrightPath Professional Services",

    color: "#742774",

    subtitle: "Better information starts with a better form.",

    tools: ["Power Apps", "SharePoint", "Microsoft Lists"],

    overview: "Structured business intake replacing email requests.",

    challenge: "Important information was often missing from requests.",

    solution: "A guided Power Apps intake experience.",

    process: `Power Apps Form
↓
SharePoint List
↓
Automation
↓
Tracking`,

    built: [
      "Custom form",
      "Validation",
      "List integration",
      "Automation triggers",
    ],

    takeaway: "Forms are the beginning of a process, not just data collection.",
  },

  "excel-planner-automation": {
    number: "04",

    image: "exceltoplanner.png",

    title: "Excel → Planner Automation",

    company: "Summit Operations Group",

    color: "#0B8F67",

    subtitle: "Move work from spreadsheets into action.",

    tools: ["Excel", "Planner", "Power Automate"],

    overview: "Automated Planner task creation from Excel data.",

    challenge: "Teams repeatedly copied information between tools.",

    solution: "Row-by-row task creation automation.",

    process: `Excel Table
↓
Power Automate
↓
Planner Task
↓
Status Update`,

    built: [
      "Excel source design",
      "Planner integration",
      "Automation workflow",
    ],

    takeaway: "Good automation works with tools users already love.",
  },

  "campaign-tracker": {
    number: "05",

    image: "tracker.png",

    title: "Interactive Campaign Tracker",

    company: "Community Forward Alliance",

    color: "#0099D8",

    subtitle: "Make progress visible.",

    tools: ["SharePoint", "HTML", "CSS", "JavaScript"],

    overview: "Visual goal tracking and milestone reporting.",

    challenge: "Spreadsheet data was difficult to interpret.",

    solution: "Interactive visual progress tracking.",

    process: `Campaign Data
↓
Calculation
↓
Progress Tracking
↓
Milestones`,

    built: ["Progress indicators", "Milestone display", "Responsive layout"],

    takeaway: "People should immediately know whether goals are on track.",
  },

  "documentation-handoff": {
    number: "06",

    image: "documentation.png",

    title: "Documentation & Client Handoff",

    company: "Horizon Business Partners",

    color: "#375A7F",

    subtitle: "Built for users. Documented for successors.",

    tools: ["Documentation", "SharePoint", "Power Platform"],

    overview: "Knowledge transfer for maintainable Microsoft 365 solutions.",

    challenge: "Solutions often become dependent on their original creator.",

    solution: "Comprehensive documentation, testing and training.",

    process: `Build
↓
Test
↓
Document
↓
Train
↓
Hand Off`,

    built: [
      "Training guides",
      "Support documentation",
      "Testing documentation",
    ],

    takeaway: "A solution succeeds when others can maintain it.",
  },
};

const slug =
  new URLSearchParams(window.location.search).get("p") ||
  "sharepoint-staff-hub";

const study = caseStudies[slug] || caseStudies["sharepoint-staff-hub"];

document.title = `${study.title} | Amy Nguyen-Le`;

document.getElementById("caseContent").innerHTML = `

<a class="back-link" href="index.html#work">
← Back to Portfolio
</a>

<div
class="case-hero"
style="background:${study.color};">

<p>PROJECT ${study.number}</p>

<h1>${study.title}</h1>

<p>${study.subtitle}</p>

<strong>${study.company}</strong>

<div class="case-meta">

${study.tools.map((tool) => `<span>${tool}</span>`).join("")}

</div>
<div class="demo-notice">

<strong>Portfolio Demonstration:</strong>

This case study uses a fictional organization and
fictional data. No client or employer information
is represented.

</div>
</div>
<img
    src="img/${study.image}"
    alt="${study.title}"
    class="case-study-image">
<div class="section-card">
<h2>Overview</h2>
<p>${study.overview}</p>
</div>

<div class="section-card">
<h2>Challenge</h2>
<p>${study.challenge}</p>
</div>

<div class="section-card">
<h2>Solution</h2>
<p>${study.solution}</p>
</div>

<div class="section-card">
<h2>How It Works</h2>
<div class="flow-box">${study.process}</div>
</div>

<div class="section-card">
<h2>What I Built</h2>

<ul>

${study.built.map((item) => `<li>${item}</li>`).join("")}

</ul>

</div>

<div class="takeaway">
${study.takeaway}
</div>

`;
