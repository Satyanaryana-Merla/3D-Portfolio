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
    title: "ETL Pipeline Development",
    icon: <BackendIcon />,
  },
  {
    title: "Cloud Data Architecture (AWS)",
    icon: <FullStackIcon />,
  },
  {
    title: "Machine Learning Solutions",
    icon: <FrontendIcon />,
  },
  {
    title: "Real-time Data Integration",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Computer Vision & Medical AI",
    icon: <FreelancerIcon />,
  },
  {
    title: "Financial Data Analytics",
    icon: <LeaderShipIcon />,
  },
  {
    title: "Database Optimization",
    icon: <LeaderShipIcon />,
  },
  {
    title: "NLP & Text Processing",
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
    {
      name: "SQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.w3schools.com/sql/",
    },
  ],
  frameworks: [
    {
      name: "Django",
      icon: "/assets/tech/django-seeklogo.svg",
      link: "https://www.djangoproject.com/",
    },
    {
      name: "FastAPI",
      icon: "/assets/tech/fastapi-seeklogo.svg",
      link: "https://fastapi.tiangolo.com/",
    },
    {
      name: "PyTorch",
      icon: "/assets/tech/pytorch-seeklogo.svg",
      link: "https://pytorch.org/",
    },
    {
      name: "TensorFlow",
      icon: "/assets/tech/tensorflow-seeklogo.svg",
      link: "https://www.tensorflow.org/",
    },
  ],
  libraries: [
    {
      name: "Keras",
      icon: "/assets/tech/keras-seeklogo.svg",
      link: "https://keras.io/",
    },
    {
      name: "Scikit-Learn",
      icon: "/assets/tech/scikit-learn-seeklogo.svg",
      link: "https://scikit-learn.org/stable/index.html",
    },
    {
      name: "Pandas",
      icon: "/assets/tech/pandas-seeklogo.svg",
      link: "https://pandas.pydata.org/",
    },
    {
      name: "NumPy",
      icon: "/assets/tech/numpy-seeklogo.svg",
      link: "https://numpy.org/",
    },
    {
      name: "Matplotlib",
      icon: "/assets/tech/matplotlib-seeklogo.svg",
      link: "https://matplotlib.org/",
    },
    {
      name: "Seaborn",
      icon: "/assets/tech/seaborn-seeklogo.svg",
      link: "https://seaborn.pydata.org/",
    },
    {
      name: "SpaCy/NLTK",
      icon: "/assets/tech/nlp.svg",
      link: "https://spacy.io/",
    },
    {
      name: "OpenCV",
      icon: "/assets/tech/opencv.svg",
      link: "https://opencv.org/",
    },
  ],
  tools: [
    {
      name: "AWS Services",
      icon: "/assets/tech/aws.svg",
      link: "https://aws.amazon.com/",
      subtools: "Lambda, Glue, S3, EC2"
    },
    {
      name: "Git/GitHub",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
    {
      name: "Jupyter",
      icon: "/assets/tech/jupyter.svg",
      link: "https://jupyter.org/",
    },
    {
      name: "VS Code",
      icon: "/assets/tech/vscode.svg",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "Hugging Face",
      icon: "/assets/tech/hugging-face-seeklogo.svg",
      link: "https://huggingface.co/",
    },
    {
      name: "Apache Spark",
      icon: "/assets/tech/spark.svg",
      link: "https://spark.apache.org/",
    },
    {
      name: "Plaid API",
      icon: "/assets/tech/plaid.svg",
      link: "https://plaid.com/",
    },
  ],
  databases: [
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postqresql-seeklogo.svg",
      link: "https://www.postgresql.org/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
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
  ],
};

const experiences = [
  {
    title: "Data Engineer",
    company_name: "Vector ML Analytics",
    icon: "/assets/company/vector-ml.svg",
    iconBg: "#1e293b",
    date: "Dec 2024 - Present",
    location: "New York, United States · Remote",
    type: "Full-time",
    points: [
      "Architecting robust ETL pipelines using AWS Glue, Lambda, and S3 for processing 100GB+ daily data streams",
      "Implementing real-time data integration with Plaid API, processing financial data for 10K+ users",
      "Optimizing PostgreSQL databases with advanced indexing strategies, reducing query time by 65%",
      "Building automated data quality frameworks catching 99% of anomalies before production impact",
      "Leading migration of legacy systems to cloud-native architecture, saving $15K/month in infrastructure costs",
      "Developing Python-based data transformation modules processing 1M+ records per hour"
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Trysol Global Services",
    icon: "/assets/company/trysol.svg",
    iconBg: "#f3f4f6",
    date: "Aug 2024 - Nov 2024",
    location: "Hyderabad, India · On-site",
    type: "Internship",
    points: [
      "Developed CNN models for image classification achieving 93% accuracy on production datasets",
      "Built NLP pipelines using BERT and spaCy for sentiment analysis of 500K+ customer reviews",
      "Implemented exploratory data analysis workflows uncovering key business insights worth $300K",
      "Created machine learning models for predictive analytics reducing customer churn by 25%",
      "Designed and deployed deep learning solutions using TensorFlow and PyTorch",
      "Collaborated with cross-functional teams to translate business requirements into ML solutions"
    ],
  },
  {
    title: "Data Analyst & ML Engineer",
    company_name: "Upwork",
    icon: "/assets/company/upwork.svg",
    iconBg: "#14b800",
    date: "Jan 2024 - Oct 2024",
    location: "Hyderabad, India · Remote",
    type: "Freelance",
    rating: "Top Rated",
    points: [
      "Delivered 20+ ML projects with 100% client satisfaction and 5-star ratings",
      "Built automated classification system for European procurement agency processing 50K+ records daily",
      "Developed predictive models for financial analysis resulting in 35% better investment decisions",
      "Implemented computer vision solutions for quality control reducing defect rates by 40%",
      "Created custom NLP solutions for document processing saving 30+ hours weekly",
      "Earned $30K+ revenue while maintaining Top Rated status on platform"
    ],
  },
  {
    title: "Data Analyst & ML Specialist",
    company_name: "Freelancer.com",
    icon: "/assets/company/freelancer.svg",
    iconBg: "#0e1724",
    date: "Jul 2023 - Dec 2023",
    location: "India · Remote",
    type: "Freelance",
    points: [
      "Specialized in medical image analysis using deep learning for healthcare clients",
      "Developed CNN models for fetal ultrasound classification with 91% accuracy",
      "Processed and analyzed 10K+ medical images using advanced augmentation techniques",
      "Built end-to-end ML pipelines from data collection to model deployment",
      "Created comprehensive documentation and training materials for non-technical users",
      "Completed all projects ahead of schedule with exceptional client testimonials"
    ],
  },
  {
    title: "Python Developer",
    company_name: "Pranathi Software Services Pvt. Ltd",
    icon: "/assets/company/pranathi.svg",
    iconBg: "#fef3c7",
    date: "Feb 2023 - May 2023",
    location: "Hyderabad, Telangana, India · On-site",
    type: "Internship",
    points: [
      "Developed Python-based automation scripts reducing manual tasks by 75%",
      "Built exploratory data analysis tools for business intelligence dashboards",
      "Implemented Django web applications for data visualization and reporting",
      "Optimized SQL queries improving database performance by 50%",
      "Created machine learning POCs demonstrating potential business applications",
      "Received 'Best Intern' recognition for innovative problem-solving approach"
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Computer/Information Technology Administration and Management",
    school: "Vignan Institute of Technology and Science",
    date: "Nov 2020 - Nov 2022",
    gpa: "8.7/10",
    icon: "/assets/education/vits.svg",
    iconBg: "#1e3a8a",
    coursework: [
      "Advanced Data Structures & Algorithms",
      "Machine Learning & AI",
      "Database Management Systems",
      "Big Data Analytics",
      "Cloud Computing",
      "Software Engineering"
    ],
    achievements: [
      "Published research paper on Crop Recommendation Systems",
      "Completed multiple ML projects with industry applications",
      "Active participant in technical symposiums"
    ]
  },
  {
    degree: "Bachelor of Science (B.Sc)",
    field: "Computer Science",
    school: "Adikavi Nannaya University (AKNU), Rajamahendravaram",
    date: "Mar 2017 - Sep 2020",
    gpa: "8.2/10",
    icon: "/assets/education/aknu.svg",
    iconBg: "#f3f4f6",
    coursework: [
      "Programming in C & C++",
      "Data Structures",
      "Database Systems",
      "Web Technologies",
      "Computer Networks",
      "Operating Systems"
    ],
    achievements: [
      "Consistent academic performer",
      "Participated in coding competitions",
      "Completed final year project on ML applications"
    ]
  }
];

const certifications = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2024",
    credentialId: "XXXXX",
    icon: "/assets/certs/tensorflow.svg"
  },
  {
    name: "AWS Certified Data Analytics",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "XXXXX",
    icon: "/assets/certs/aws.svg"
  },
  {
    name: "Data Science Professional Certificate",
    issuer: "IBM",
    date: "2023",
    credentialId: "XXXXX",
    icon: "/assets/certs/ibm.svg"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera - deeplearning.ai",
    date: "2023",
    credentialId: "XXXXX",
    icon: "/assets/certs/coursera.svg"
  }
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
    name: "Crop Recommendation System using ML",
    description:
      "Published research implementing ML algorithms to revolutionize agricultural decision-making. System analyzes soil composition, weather patterns, and historical data to recommend optimal crops. Achieved 95% accuracy using ensemble methods, potentially increasing farmer yields by 30%.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Random Forest",
        color: "pink-text-gradient",
      },
      {
        name: "KNN Algorithm",
        color: "orange-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "yellow-text-gradient",
      },
      {
        name: "Agricultural Tech",
        color: "red-text-gradient",
      },
    ],
    impact: "Published in Indian Political Science Association",
    image: "/assets/projects/crop-recommend.svg",
    source_code_link: "https://github.com/Satyanaryana-Merla/Crop-Recommendation-System-using-KNN-Algorithm",
    publication_link: "https://www.linkedin.com/in/satyanarayanamerla/details/publications/",
  },
  {
    name: "AI-Powered Procurement Classification System",
    description:
      "Engineered ML system automating classification of 50K+ procurement records with 94% accuracy. Implemented NLP pipeline using BERT for semantic understanding of CPV codes. Reduced manual classification time by 80%, saving €200K annually for European procurement agency.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP/BERT",
        color: "green-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "pink-text-gradient",
      },
      {
        name: "SpaCy",
        color: "orange-text-gradient",
      },
      {
        name: "FastAPI",
        color: "yellow-text-gradient",
      },
      {
        name: "Docker",
        color: "red-text-gradient",
      },
    ],
    impact: "Processing 1000+ classifications/minute",
    image: "/assets/projects/procurement-ai.svg",
    source_code_link: "https://github.com/Satyanaryana-Merla",
    client_project: true,
  },
  {
    name: "Medical Image Classification for Prenatal Diagnostics",
    description:
      "Developed CNN-based system achieving 91% accuracy in classifying fetal anatomical structures from ultrasound images. Processed 5000+ medical images with advanced augmentation techniques. System assists radiologists in prenatal screening, reducing diagnosis time by 60%.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "CNN/ResNet",
        color: "pink-text-gradient",
      },
      {
        name: "OpenCV",
        color: "orange-text-gradient",
      },
      {
        name: "Medical AI",
        color: "yellow-text-gradient",
      },
      {
        name: "Keras",
        color: "red-text-gradient",
      },
    ],
    impact: "Helping screen 100+ patients daily",
    image: "/assets/projects/medical-ai.svg",
    source_code_link:
      "https://github.com/Satyanaryana-Merla/Classifying-anatomical-structure-in-2D-fetal-ultrasound-images",
    research_paper: true,
  },
  {
    name: "Financial Analysis & Loan Analytics Platform",
    description:
      "Built comprehensive financial analytics system processing $10M+ in loan portfolios. Automated amortization calculations for 1000+ loans, reducing processing time by 85%. System generates real-time dashboards and predictive models for risk assessment.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
      {
        name: "Plotly",
        color: "orange-text-gradient",
      },
      {
        name: "Financial Modeling",
        color: "yellow-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "red-text-gradient",
      },
    ],
    impact: "Saved 40+ hours/week in analysis",
    image: "/assets/projects/financial-analytics.svg",
    source_code_link: "https://github.com/Satyanaryana-Merla/financial-analysis-in-loan-analytics",
    deployed_link: "https://github.com/Satyanaryana-Merla/financial-analysis-in-loan-analytics/blob/main/Readme.md",
  },
];

const publications = [
  {
    title: "Crop Recommend System using Machine Learning",
    journal: "Indian Political Science Association",
    date: "Dec 10, 2022",
    description: "Research paper exploring ML applications in agriculture, demonstrating how data-driven approaches can revolutionize farming decisions and increase crop yields by up to 30%.",
    link: "https://www.linkedin.com/in/satyanarayanamerla/details/publications/",
    citations: "15+",
    impact: "Adopted by 3 agricultural cooperatives"
  }
];

const statistics = [
  {
    value: "100GB+",
    label: "Data Processed Daily",
    icon: "📊",
    description: "Large-scale data pipeline management"
  },
  {
    value: "94%",
    label: "ML Model Accuracy",
    icon: "🎯",
    description: "Average across all production models"
  },
  {
    value: "$545K+",
    label: "Cost Savings Generated",
    icon: "💰",
    description: "Through automation and optimization"
  },
  {
    value: "50K+",
    label: "Records Automated",
    icon: "⚡",
    description: "Daily automated processing capacity"
  },
  {
    value: "20+",
    label: "Successful Projects",
    icon: "🚀",
    description: "Delivered with 100% satisfaction"
  },
  {
    value: "5★",
    label: "Client Rating",
    icon: "⭐",
    description: "Consistent top-rated performance"
  }
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
  // {
  //   id: "instagram",
  //   icon: <InstagramIcon />,
  //   link: "https://www.instagram.com/satya_1213_/",
  // },
];

const heroTexts = [
  "I build ML models with 90%+ accuracy",
  500,
  "I process 100GB+ data daily",
  500,
  "I automate workflows saving $100K+ annually",
  500,
  "I deploy scalable AI solutions",
  500,
  "I transform data into business insights",
  500,
  "I engineer production-ready pipelines",
  500,
  "I solve complex problems with AI",
  500,
  "I drive data-driven decisions",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  education,
  certifications,
  testimonials,
  projects,
  publications,
  statistics,
  socials,
  heroTexts,
};
