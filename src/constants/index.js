import {
    datastudio,
    flutter,
    java,
    python,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    wro,
    wrg,
    xhacks,
    dga,
    eis,
    uoft,
    carrent,
    jobit,
    tripguide,
    threejs,
    activity2,
    menuactivity,
  } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },  {
    id: "activities",
    title: "Activities",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Student Representative",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Data Studio",
    icon: datastudio,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Top 16 Global Finalist",
    company_name: "World Robot Olympiad",
    icon: wro,
    iconBg: "#E6DEDD",
    date: "November 2015",
    points: [
      "Developing and refining robot prototype for given competition task under the theme of robot explorers.",
      "Collaborating with a team of 3 and a coach to program and debug robot to optimize task completion time.",
      "Adapting to new additional tasks put in place on competition day under tight time limit.",
    ],
  },
  {
    title: "Gold Medalist",
    company_name: "World Robot Games",
    icon: wrg,
    iconBg: "#000000",
    date: "August 2016",
    points: [
      "Developing and refining an Arduino based fire fighting robot to complete the task in place.",
      "Collaborating with a teammate and a coach to fix bugs and optimize time taken to put out fires.",
      "Adapting and optimizing robot runtime to hurdles on competition day under pressure.",
    ],
  },
  {
    title: "Coding Club Founder",
    company_name: "High School",
    icon: eis,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - May 2022",
    points: [
      "Ran a school club dedicated to programming with Python and Arduino languages.",
      "Hosted schoolwide Python discord bot creation competition.",
      "Created child friendly obstacle-avoiding alcohol dispenser robot for school classrooms.",
      "Hosting programming workshops and providing constructive feedback to other student developers.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Digital Government Development Agency Thailand",
    icon: dga,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Aug 2021",
    points: [
      "Employing Java and SQL to model, present, and analyze workflow and business data.",
      "Utilizing Google Data Studio to present monthly reports monitoring large amounts of customer data.",
      "Assisting in streamlining the backend DevOps process for security integration.",
    ],
  },
  {
    title: "Best Rookie Hack",
    company_name: "XHacks Hackathon",
    icon: xhacks,
    iconBg: "#000000",
    date: "August 2021",
    points: [
      "Utilizing Angular and Firebase to create a web application for hosting online debate tournaments.",
      "Creating landing page with user authentication, and added text and audio sharing functionalities.",
      "Designing UX and UI elements as well as graphics for the website's pages.",
    ],
  },
  {
    title: "Pursuing a Computer Science Major",
    company_name: "University of Toronto",
    icon: uoft,
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "Pursuing a comprehensive education in Data Structures, Algorithms, and Machine Learning, amongst related fields.",
      "Creating a Fintech Club to connect together like-minded students and host workshops and hackathons.",
      "Taking part in computer science related clubs on campus through workshops and hackathons.",
    ],
  },
];

const activities = [  // Changed from 'projects' to 'activities'
  {
    name: "Menu",
    description:
      "Designed some webpages for fun using HTML, design a visual template and menu used by the restaurant Sala House Coffee Bar and Bistro using Canva which had strengthen visual art and designing skills.",
    tags: [],  // Removed tags
    image: menuactivity,  // You might want to update this to a relevant image
    source_code_link: "https://www.canva.com/design/DAGofe-oZHk/KxyI4z68IAmZ-_148sinsQ/watch?utm_content=DAGofe-oZHk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hda080b9486/",  // Update this if you have a relevant link
  },
  {
    name: "Buddhist Lesson Book",
    description:
      "Contributed in designing animation and translating a Buddhist lesson book, \u201CThe Practice of the 4 Foundations of Mindfulness at Burapha University at Wat Phutthasat\u201D from Thai to English. This experience has demonstrated my proficiency in English as I\u2019ve spent several years outside Thailand as international student.",
    tags: [],  // Removed tags
    image: activity2,  // You might want to update this to a relevant image

  },

];

export { services, technologies, experiences, activities }  // Changed 'projects' to 'activities'