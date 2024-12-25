/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Samira Abedini",
  title: "Hi, I'm Samira",
  subTitle: (
    <>
      {emoji("A passionate Data Science and Bioinformatics Enthusiast 🚀")}
      <br />
      {emoji(
        "As a Bioinformatics student at Saarland University, I specialize in leveraging machine learning and computational tools to solve complex healthcare problems. I have a strong interest in personalized medicine, and machine learning applications in healthcare."
      )}
    </>
  ),
  
  

  resumeLink:
    "https://drive.google.com/file/d/1aP6qYu6iJc44bknLDeXdSzn4AAuvKfDR/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SamiraAbedini",
  linkedin: "https://www.linkedin.com/in/samiraabedini-ai/",
  gmail: "samiraabedini150@gmail.com",
  twitter: "https://x.com/samira_abedini",
  kaggle: "https://www.kaggle.com/samiraabedini",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do ...",
  subTitle: `I have a strong background in programming and machine learning tools, focusing on solving problems and creating innovative solutions. My skills include:`,
  skills: [],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python Programming",
    iconPath: "/assets/icons/4518857_python_icon.png" // Generic table icon for dataframes
  },

  {
    skillName: "R programming",
    iconPath: "/assets/icons/4375063_logo_project_r_icon.png" // Generic table icon for dataframes
  },

  {
    skillName: "C++",
    iconPath: "/assets/icons/C++.png" // Generic table icon for dataframes
  },

  {
    skillName: "TensorFlow",
    iconPath: "/assets/icons/tensorflow.png" // Generic table icon for dataframes
  },

  {
    skillName: "Scikitlearn",
    iconPath: "/assets/icons/scikit-learn.png" // Generic table icon for dataframes
  },

  {
    skillName: "Pandas",
    iconPath: "/assets/icons/Pandas.png" // Generic table icon for dataframes
  },

  {
    skillName: "NumPy",
    iconPath: "/assets/icons/NumPy.png" // Generic table icon for dataframes
  },

  {
    skillName: "Matplotlib",
    iconPath: "/assets/icons/Matplotlib.png" // Generic table icon for dataframes
  },

  {
    skillName: "Streamlit",
    iconPath: "/assets/icons/Streamlit.png" // Generic table icon for dataframes
  },

  {
    skillName: "Jupiter Notebook",
    iconPath: "/assets/icons/Jupyter.png" // Generic table icon for dataframes
  },

  {
    skillName: "VS Code",
    iconPath: "/assets/icons/VSCode.png" // Generic table icon for dataframes
  },

  {
    skillName: "GIT",
    iconPath: "/assets/icons/Git.png" // Generic table icon for dataframes
  },

  {
    skillName: "GitHub",
    iconPath: "/assets/icons/GitHub.png" // Generic table icon for dataframes
  },

  {
    skillName: "MATLAB",
    iconPath: "/assets/icons/MATLAB.png" // Generic table icon for dataframes
  },
],
display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universität des Saarlandes",
      logo: require("./assets/images/logoudss.png"),
      subHeader: "Master of Science in Bioinformatics, Saarland, Germany",
      duration: "October 2024 - Ongoing",
      desc: "Selected Courses in the first semester: Elements of Machine Learning, Neural Networks",
      
    },
    {
      schoolName: "University of Tabriz",
      logo: require("./assets/images/logiTU.png"),
      subHeader: "Bachelor of Science in Biomedical Engineering, Tabriz, Iran",
      duration: "October 2024 - Septemeber 2021",
      desc: "Ranked top 10% in the program. Selected Courses: Medical Information Technology, Computer Programming, Mathematics 1 and 2, Biological and Computational Intelligence, Biostatistics, Biophysics, Biochemistry, Medical Physics",
      descBullets: ["Final Project: Designing a Digital Feedforward Dynamic Range Compressor for hearing aids (Grade achieved: 20/20)"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Collabration",
      company: "Cognitive Neuroscience Lab",
      companylogo: require("./assets/images/cog.png"),
      date: "December 2023 – September 2024",
      desc: "Tabriz University, Tabriz, Iran",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Biomedical Engineer",
      company: "BMG Company",
      companylogo: require("./assets/images/bmg.png"),
      date: "December 2020 – January 2023",
      desc: "R&D team, BMG Company, Tabriz, Iran",
      descBullets: [
        "Analyzed medical data (ECG, EEG, and MRI data) using machine learning techniques",
        "Programmed touch-screen LCDs for medical devices"
      ]
    },
    {
      role: "Mathematics Teacher",
      company: "Hallaj Mathematics Academy",
      companylogo: require("./assets/images/hallaj.png"),
      date: "April 2020 – September 2023",
      desc: "Tabriz, Iran",
      descBullets: [
        "Taught mathematics to high school students preparing for the university entrance exam",
        "Organized problem-solving sessions, administered exams, and assigned homework"
      ]
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Courses, Certifications, Achievements, and Some Cool Stuff!",

  achievementsCards: [
    {
      title: "R-Programming",
      subtitle:
        " ",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "AI",
      footerLink: [
        {
          name: "Ongoing",
        },
        {
          name: "Project",
          url: "https://github.com/SamiraAbedini/R-Programming"
        }
      ]
    },
    {
      title: "Precision Medicine",
      subtitle:
        "Coursera",
      image: require("./assets/images/UniversityofGeneva.png"),
      imageAlt: "AI",
      footerLink: [
        {
          name: "Ongoing",
        },
        {
          name: "Project",
          url: "https://github.com/SamiraAbedini/Precision-Medicine"
        }
      ]
    },

    {
      title: "Python for Genomic Data Science",
      subtitle:
        "Coursera: Genomic Data Science Specialization",
      image: require("./assets/images/JohnsHopkinsUniversity.png"),
      imageAlt: "AI",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/12x0Wap303ouxtC5p6sxzPEddHKBxLjep/view?usp=sharing",
        },
        {
          name: "Project",
          url: "https://github.com/SamiraAbedini/Genomic-Data-Science"
        }
      ]
    },

    {
      title: "Introduction to Genomic Technologies",
      subtitle:
        "Coursera: Genomic Data Science Specialization",
      image: require("./assets/images/JohnsHopkinsUniversity.png"),
      imageAlt: "AI",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1_JtMrwDxz-K3krOORuctbRyc-_tR9G6B/view?usp=sharing",
        },
        {
          name: "Project",
          url: "https://github.com/SamiraAbedini/Genomic-Data-Science"
        }
      ]
    },

    {
      title: "AI for Medical Diagnosis",
      subtitle:
        "Coursera: AI for Medicine Specialization",
      image: require("./assets/images/deep.webp"),
      imageAlt: "AI",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1bq1w2cPh9klja7QKt2S36o6HsNiSsybF/view?usp=sharing",
        },
        {
          name: "Project",
          url: "https://github.com/SamiraAbedini/AI-for-Medicine"
        }
      ]
    },

    {
      title: "AI conference, Generative AI Tools",
      subtitle:
        "Sharif University of Technology",
      image: require("./assets/images/pngegg.png"),
      imageAlt: "AI",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1wEko8LknYDi5FKa1hm7kCk8Z3Moy5fFs/view?usp=sharing",
        },
      ]
    },

    {
      title: "Machine Learning Specialization",
      subtitle:
        "Coursera",
      image: require("./assets/images/deep.webp"),
      imageAlt: "AI",
      footerLink: [
        {
          name: "Project",
          url: "https://github.com/SamiraAbedini/Machine-Learning"
        }
      ]
    },

    {
      title: "Artificial intelligence school (ML, DL)",
      subtitle:
        "U-Tech Academy, University of Tehran",
      image: require("./assets/images/utech.webp"),
      imageAlt: "AI",
      footerLink: [
        {
          name: "Project",
          url: "https://github.com/SamiraAbedini/Machine-Learning"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Events",
  subtitle: emoji(
    "I enjoy participating in various tech events, where I can gain invaluable knowledge and expand my network of like-minded individuals!"
  ),

  talks: [
    {
      title: "Techstars Start-Up Weekend Saarbrücken",
      subtitle: "Stocksteller team",
      slides_url: "https://prezi.com/p/ga_3w8jszccq/startup-weekend-saarbrucken/?present=1",
      event_url: "https://gruendercampus-saar.de/startup-weekend-2024/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "samiraabedini150@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "samira_abedini", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
