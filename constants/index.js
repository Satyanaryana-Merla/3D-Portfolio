import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analysis and Exploration",
    icon: <FullStackIcon />,
  },
  {
    title: "Predictive Modeling and Machine Learning",
    icon: <FrontendIcon />,
  },
  {
    title: " Data Engineering",
    icon: <BackendIcon />,
  },
  {
    title: "Business Intelligence and Visualization",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Natural Language Processing (NLP)",
    icon: <FreelancerIcon />,
  },
  {
    title: "Data Strategy Consulting",
    icon: <LeaderShipIcon />,
  },
  {
    title: "Research and Development",
    icon: <LeaderShipIcon />,
  },
  {
    title: "Training and Support",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },

    {
      name: "R",
      icon: "/assets/tech/r-project-seeklogo.svg",
      link: "https://www.r-project.org/",
    },
  ],
  frameworks: [
    {
      name: "Fast Api",
      icon: "/assets/tech/fastapi-seeklogo.svg",
      link: "https://fastapi.tiangolo.com/",
    },
    {
      name: "Django",
      icon: "/assets/tech/django-seeklogo.svg",
      link: "https://www.djangoproject.com/",
    },
    {
      name: "Pytorch",
      icon: "/assets/tech/pytorch-seeklogo.svg",
      link: "https://pytorch.org/",
    },
  ],
  libraries: [
    {
      name: "Keras",
      icon: "/assets/tech/keras-seeklogo.svg",
      link: "https://keras.io/",
    },
    {
      name: "Tensorflow",
      icon: "/assets/tech/tensorflow-seeklogo.svg",
      link: "https://www.tensorflow.org/",
    },
    {
      name: "Seaborn",
      icon: "/assets/tech/seaborn-seeklogo.svg",
      link: "https://seaborn.pydata.org/",
    },
    {
      name: "Matplotlib",
      icon: "/assets/tech/matplotlib-seeklogo.svg",
      link: "https://matplotlib.org/",
    },
    {
      name: "Numpy",
      icon: "/assets/tech/numpy-seeklogo.svg",
      link: "https://numpy.org/",
    },
    {
      name: "Pandas",
      icon: "/assets/tech/pandas-seeklogo.svg",
      link: "https://pandas.pydata.org/",
    },
    {
      name: "Scikit-Learn",
      icon: "/assets/tech/scikit-learn-seeklogo.svg",
      link: "https://scikit-learn.org/stable/index.html",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "hugging-face-seeklogo",
      icon: "/assets/tech/hugging-face-seeklogo.svg",//D:\3D-Portfolio\public\assets\tech\
      link: "https://huggingface.co/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "SQL",
      icon: "/assets/tech/postqresql-seeklogo.svg",
      link: "https://www.postgresql.org/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "Junior Data Engineer",
    company_name: "Vector ML Analytics",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Present",
    points: [
      "As a backend data engineer with a passion for data architecture and efficient system design, I’ve had the privilege of blending technical expertise with problem-solving skills to deliver impactful and scalable solutions.",
      "My projects have ranged from creating ETL processes to integrate and transform data from multiple sources to implementing RESTful APIs for real-time data access, always with a focus on ensuring data reliability, security, and accessibility",
      "Throughout my career, I’ve designed, developed, and optimized data pipelines and APIs, leveraging Python frameworks and cloud technologies to handle diverse and large-scale data operations.",
      "My projects have ranged from creating ETL processes to integrate and transform data from multiple sources to implementing RESTful APIs for real-time data access, always with a focus on ensuring data reliability, security, and accessibility."
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Trysol Global Services",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Nov 2024",
    points: [
      "As a data scientist with a passion for machine learning and data analysis, I’ve had the privilege of blending technical expertise with leadership and project execution skills to drive impactful outcomes.",
      "My journey has been shaped by hands-on experience in predictive modeling, deep learning, and building scalable data-driven solutions that solve real-world problems.",
      "Throughout my career, I’ve developed and deployed machine learning and deep learning models, leveraging Python frameworks for diverse applications, including image processing and natural language processing.",
      "My projects have ranged from building computer vision systems for object detection to conducting sentiment analysis, always with a focus on uncovering actionable insights from complex datasets.",
    ],
  },
  {
    title: "Data Analyst, ML",
    company_name: "Upwork",
    icon: "/assets/company/drdo-cabs.svg",
    iconBg: "#E0F7FA",
    date: "Jan 2024 - Oct 2024",

    points: [
      "Developed a machine learning system for a data aggregation company to automate classification based on keywords, CPV (Common Procurement Vocabulary) codes, and sectors.",
      "Leveraged advanced natural language processing (NLP) techniques to identify relevant keywords from dataset titles and map them to predefined classifications.",
      "Enhanced the client's ability to process and classify data, reducing manual effort and improving accuracy in mapping data to CPV codes and sectors.",
      "Built a system capable of handling real-time data inputs for continuous classification and analysis, significantly improving operational efficiency.",
    ],
  },
  {
    title: "Data Analyst, ML",
    company_name: "Freelancer",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#F4D03F",
    date: "Sep 2023 - Dec 2023",
    points: [
      "Trained a deep learning model on a dataset of fetal ultrasound images, achieving promising classification results for four anatomical structures: abdomen, thorax, brain, and femur.",
      "Performed thorough preprocessing on the dataset, including data augmentation and normalization to enhance the model's performance and generalization.",
      "Designed and optimized a convolutional neural network (CNN) architecture for the classification task, demonstrating strong performance during training and evaluation.",
      "Tested the model on a separate dataset, implemented a function to classify new input images, and organized the classified images into respective folders for easy result visualization and interpretation.",
      "This pipeline sets the foundation for accurate fetal anatomical structure classification, with the potential to assist medical professionals in prenatal diagnostics.",
    ],
  },
  {
    title: "Python Developer",
    company_name: "Pranathi Software Services Pvt. Ltd",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#FFFBF5",
    date: "Feb 2023 - May 2023",
    location: "Hyderabad, Telangana, India · On-site",
    points: [
      "Developed expertise in full-stack development, working with email notification systems, database administration, and Python programming.",
      "Gained practical experience in project management, overseeing the planning, execution, and completion of tasks while effectively managing deliverables and deadlines.",
      "Enhanced problem-solving skills by tackling system integration challenges and data security issues, contributing to improved software solutions.",
      "Collaborated with cross-functional teams, improving communication and teamwork in a professional setting, while delivering results on collaborative projects.",
      "Applied theoretical knowledge to real-world projects, understanding how technology can address community health issues and solve practical problems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Financial analysis in loan analytics",
    description:
      "The Python Scripts calculates monthly payments for multiple loans, generates detailed amortization schedules for each loan, and then aggregates and saves this data into CSV and Excel files.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Numpy",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
      {
        name: "Excel",
        color: "orange-text-gradient",
      },
      {
        name: "csv",
        color: "yellow-text-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "red-text-gradient",
      },
    ],
    image: "/assets/projects/finacel.jpeg",
    source_code_link: "https://github.com/Satyanaryana-Merla/financial-analysis-in-loan-analytics",
    deployed_link: "https://github.com/Satyanaryana-Merla/financial-analysis-in-loan-analytics/blob/main/Readme.md",
  },
  {
    name: "Automated Keyword, CPV Code, and Sector Classification Using Machine Learning",
    description:
      "Developed a machine learning system for a data aggregation company to automatically classify data based on keywords, Common Procurement Vocabulary (CPV) codes, and sectors. The system utilizes advanced natural language processing (NLP) techniques to identify relevant keywords from dataset titles and then maps them to predefined CPV codes and sectors.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-learn:",
        color: "green-text-gradient",
      },
      {
        name: "NLTK",
        color: "pink-text-gradient",
      },
      {
        name: "Pandas",
        color: "orange-text-gradient",
      },
      {
        name: "NumPy",
        color: "yellow-text-gradient",
      },
      {
        name: "Docker",
        color: "red-text-gradient",
      },
    ],
    image: "/assets/projects/Machine-Learning.jpg",
    source_code_link: "https://www.linkedin.com/in/satyanarayanamerla/details/",
    // deployed_link: "https://www.linkedin.com/in/satyanarayanamerla/details/projects/",
  },
  {
    name: "Classifying anatomical structure in 2D fetal ultrasound images",
    description:
      "A deep learning model was trained on fetal ultrasound images, achieving promising classification results across four anatomical structures. The model was optimized and tested on a separate dataset. The code organized and saved classified images, establishing a robust pipeline for accurate fetal anatomical structure classification.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-learn:",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
      {
        name: "Pandas",
        color: "orange-text-gradient",
      },
      {
        name: "NumPy",
        color: "yellow-text-gradient",
      },
      {
        name: "Keras",
        color: "red-text-gradient",
      },
    ],
    image: "/assets/projects/project3.jpeg",
    source_code_link:
      "https://github.com/Satyanaryana-Merla/Classifying-anatomical-structure-in-2D-fetal-ultrasound-images",
    // deployed_link:
    //   "",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Satyanaryana-Merla",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/satyanarayanamerla/",
  },
  // {
  //   id: "x",
  //   icon: <XIcon />,
  //   link: "https://twitter.com/Shivam_1_Sharma",
  // },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/satya_1213_/",
  },
];

const heroTexts = [
  "Machine Learning and Predictive Modeling",
  500,
  "Natural Language Processing (NLP)",
  500,
  "Business Intelligence and Visualization",
  500,
  "Data Analysis and Exploration",
  500,
  "Data Engineering",
  500,
  "Data Strategy Consulting",
  500,
  "Research and Development",
  500,
  "Training and Support",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
