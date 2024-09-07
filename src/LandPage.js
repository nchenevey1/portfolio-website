
const about = {
  title: "Nicholas Chenevey",
  subTitle1: "MS Electrical Engineering, BSc Mechatronic Engineering",
  subTitle2: "Robotics | Perception | Machine Learning",
  resume: "https://github.com/nchenevey1"
};

const careerExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Mechatronic Engineer",  
        company: "Onanon, an Ampenol Company",
        date: "2023",
        desc: "World class end-to-end connector and cable solutions ",
        descBullets: [
          "R&D for precision soldering robotics including electrical, mechanical, and software development",
          "Mechanical, electrical, and software design for manufacturing medical devices"
        ],
        companyColor: "rgb(0, 92, 185)"
      },
      {
        role: "Machine Learning Support Engineer",  
        company: "Labelbox",
        date: "2022",
        desc: "Data curation, AI-assisted labeling, model training, diagnostics, and labeling services.",
        descBullets: [
          "Debugged customer code, providing international remote support on machine learning best practices and automation",
          "Authored and maintained internal and external knowledge base technical documentation"
        ],
        companyColor: "rgb(23, 23, 23)"
      },
      {
        role: "Project Engineer",  
        company: "Paragon Mechanical",
        date: "2021 - 2022",
        desc: "A full-service mechanical contractor providing HVAC, piping, architectural sheet metal, and service",
        descBullets: [
          "Interpreted HVAC, piping, and electrical engineering drawings for semiconductor labs, defense contractor facilities, and private businesses",
          "Performed project take off, project cost estimation, and coordinated with subcontractors & vendors"
        ],
        companyColor: "rgb(5, 31, 68)"
      }
    ]
};

const projectExperiences = {
  project: [
    {
      image: require("./assets/images/PyTetris.png"),
      gif: require("./assets/images/PyTetris.gif"),
      title: "Python Tetris",
      description: "A Tetris game made in Python along with a bot to play it.",
      skills: [
        require("./assets/images/python.png")
      ]
    },
    {
      image: require("./assets/images/combustion-chamber.JPG"),
      gif: require("./assets/images/SW_Gif_2.gif"),
      title: "SolidWorks Design",
      description: "A combustion chamber, jet engine, and planetary gear system designed in SolidWorks CAD Software",
      skills: [
        require("./assets/images/SolidWorks-Logo.png")
      ]
    },
    {
      image: require("./assets/images/Full_Assembly_Render_square.JPG"),
      gif: require("./assets/images/bowwow.gif"),
      title: "The BowWow",
      description: "The BowWow is an automated dog petting machine that includes a machine learning object detection system",
      skills: [
        require("./assets/images/python.png"),
        require("./assets/images/TF_black.png"),
        require("./assets/images/control-systems.png")
      ]
    },
    {
      image: require("./assets/images/ballplate.png"),
      gif: require("./assets/images/ball_plate.gif"),
      title: "Ball & Plate",
      description: "This ball and plate control system was simulated in CoppeliaSim, using MATLAB and Simulink to perform calculations",
      skills: [
        require("./assets/images/brand-lua.png"),
        require("./assets/images/coppelia.png"),
        require("./assets/images/control-systems.png"),
        require("./assets/images/matlab-simulink.png")
      ]
    }
  ]
};

const coursesSection = {
  title: "CV",
  coursesSubTitle: "MS Electrical Engineering, BSc Mechatronic Engineering",
  skillsList: [
    {
      courseID: "516",
      courseTitle: "EE 516 Pattern Recognition",
      courseDescription: "Fundamental topics in statistical pattern recognition including Bayesian decision theory, Maximum-likelihood and Bayesian estimation, non-parametric density estimation, feature selection, dimension reduction, and clustering, with application to image pattern recognition.",
      courseColor: "rgb(24, 68, 52)"
    },
    {
      courseID: "509",
      courseTitle: "EE 509 Computational Intelligence",
      courseDescription: "Theory, design, and applications of biologically inspired computational paradigms, including artificial neural networks, evolutionary computation, swarm intelligence, and hybrid intelligent systems.",
      courseColor: "rgb(24, 68, 52)"
    },
    {
      courseID: "513",
      courseTitle: "EE 513 Control Systems Theory",
      courseDescription: "State representation of dynamic systems. Mathematical models of physical devices, controllability and observability. Design of closed-loop systems. Optimal control theory.",
      courseColor: "rgb(24, 68, 52)"
    },
    {
      courseID: "528",
      courseTitle: "EE 528 Digital Image Processing",
      courseDescription: "Processing and interpretation of images by computer. Emphasis on current applications with real images used in programming assignments",
      courseColor: "rgb(24, 68, 52)"
    },
    {
      courseID: "525",
      courseTitle: "EE 525 Stochastic Processes",
      courseDescription: "Probability and stochastic processes used in random signal analysis. Response of linear systems to random inputs",
      courseColor: "rgb(24, 68, 52)"
    },
    {
      courseID: "515",
      courseTitle: "EE 515 Discrete Time Filters",
      courseDescription: "Advanced topics in filter design and implementation. Emphasis placed on current applications and on the processing of real signals",
      courseColor: "rgb(24, 68, 52)"
    },
    {
      courseID: "486",
      courseTitle: "MECA 486 Motion and Machine Automation",
      courseDescription: "Machine automation concepts in electrical circuits, precision mechanics, control systems, and programming. Motor sizing, gearing, couplings, ground loops, effective use of step motors, servo control loops, regeneration, networking, I/O, power supplies, vibration and resonance, mechanical tolerancing, linear bearings and drive mechanisms, and troubleshooting.",
      courseColor: "rgb(156, 36, 60)"
    },
    {
      courseID: "482",
      courseTitle: "MECA 482 Control System Design",
      courseDescription: "Modeling and simulation of dynamic system performance. Control system design for continuous systems using both analog and digital control techniques",
      courseColor: "rgb(156, 36, 60)"
    }
  ]
};

const contactMe = {
  title: "Email Me",
  email: "nicholaschenevey1@gmail.com"
};

export {about, careerExperiences, projectExperiences, coursesSection, contactMe};