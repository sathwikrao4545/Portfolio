import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Passionate Software Engineer with expertise in Java, Python, ReactJS, and experience developing scalable, efficient software solutions. Skilled in AWS, Docker, Jenkins, and CI/CD pipelines, with a focus on optimizing performance and streamlining deployments. Dedicated to delivering innovative, user-centric applications and solving complex challenges with modern technologies.`;

export const ABOUT_TEXT = `I am an ambitious and adaptable Software Engineer with a Master’s degree in Computer Science from NJIT, expected in May 2025. My expertise spans programming languages like Java, Python, and JavaScript, and frameworks such as ReactJS and Node.js. With hands-on experience in AWS, Docker, CI/CD pipelines, and developing scalable microservices, I have a strong track record of delivering impactful solutions, including optimizing query performance and creating interactive data dashboards. Passionate about solving challenging problems, I am eager to contribute to innovative projects and grow as a professional in the tech industry`;

export const EXPERIENCES = [
  {
    year: " Jan 2023- May 2023",
    role: "Data Analyst Intern",
    company: "Heighten Innovative Solutions",
    description: `Created interactive dashboards in Tableau and Power BI to monitor KPIs like stock turnover, order cycles, and supplier
                  performance, providing stakeholders with timely, actionable insights. Utilized data-cleaning methods in SQL and Excel to standardize and validate datasets, enhancing accuracy and reducing
                  errors by 15% for consistent team reporting. Increased forecasting accuracy by 25% using historical data analysis, enabling better demand planning and reducing
                  stockouts.
                   `,
    technologies: ["SQL", "Power BI", "Tableau", "Excel"],
  },
  {
    year: "May 2022- Aug 2022",
    role: " Software Engineer Intern",
    company: "Rovasys",
    description: ` Developed scalable order processing microservice architecture for an e-commerce platform, with seamless integration of
 new features and functionalities. Improved data retrieval speed by implementing efficient indexing techniques, resulting in a 30% enhancement in query
 performance for the order processing microservice.`,
    technologies: ["SpringBoot", "ReactJS"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Real Estate Price Trend Analyzer",
    image: project1,
    description:
      "Conducted Exploratory Data Analysis (EDA) to identify influential factors, employing a Regression model with 85% accuracy in predicting housing prices. Utilized Pandas, NumPy and Matlplotlib to efficiently analyze large datasets and visually represent key parameters impacting property valuation.",
    // technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Gator Library Management System",
    image: project2,
    description:
      "Developed a comprehensive Library Management System in Java, utilizing a Red-Black Tree to efficiently manage and organize over 50,000 records, and implemented a Min Heap to prioritize patron reservations for optimal resource allocation.",
    // technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Jenkins CI/CD Pipeline",
    image: project3,
    description:
      "AImplemented a CI/CD pipeline on Jenkins, integrating GitHub webhooks for automated project code integration, and utilized Ansible for continuous deployment, orchestrating dynamic updates to an Oracle Cloud server and leveraged Docker containerization for efficient deployment and seamless scaling.",
    // technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Restaurant Website",
    image: project4,
    description:
      "Crafted and developed a dynamic website using Next.js, enhancing user experience and improving website performance by 30%. Utilized Figma for an intuitive UI, leading to a 25% increase in user engagement. Integrated Mailchimp for email marketing, resulting in a 15% increase in communication efficiency.",
    // technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "304 6th ST Harrison, 07029, NJ ",
  phoneNo: "+1(551) 229 7744 ",
  email: "sraov369@gmail.com",
};
