export const projects = [
  {
    id: 1,
    title: 'Automated Exam Marking System (FYP)',
    description: 'Automated exam grading system using Retrieval-Augmented Generation (RAG) and LLMs.',
    techStack: ['Python', 'FastAPI', 'LangChain', 'LLMs', 'Docker', 'FAISS'],
    details: `Developed a back-end with FastAPI and a front-end interface, containerized with Docker for deployment. Integrated RAG pipelines with Gemini LLM (via LangChain) to automate grading and generate detailed feedback. Used FAISS for semantic retrieval, ensuring scalability and robustness. Evaluation showed grading within three points of human markers, with BLEURT scores confirming reliable feedback quality.`,
    repoLink: 'https://github.com/liowjiaxin/FYP-AutomatedMarking.git'
  },
  {
    id: 2,
    title: 'Shop RAGBot – Conversational AI for E-commerce',
    description: 'A chatbot for product FAQs powered by RAG and LLM integration.',
    techStack: ['Python', 'RAG', 'NLP', 'FAISS', 'LangChain', 'Groq API', 'LLaMA-3.1'],
    details: `Built a RAG-based chatbot to answer product FAQs and customer queries. Integrated Groq API with LLaMA-3.1 models to deliver natural and context-aware responses. Designed the pipeline for extensibility, supporting structured product data and hybrid search for improved accuracy.`,
    repoLink: 'https://github.com/liowjiaxin/rag-shop-bot.git'
  },
  {
    id: 3,
    title: 'Workflow Satisfiability Problem Solver',
    description: 'Constraint-based optimization for workflow authorization and security policies.',
    techStack: ['Python', 'OR-Tools', 'Z3', 'Constraint Programming'],
    details: `Designed solutions for the Workflow Satisfiability Problem (WSP) by encoding authorization, separation of duties, and precedence rules into a constraint programming framework. Improved scalability with integer and array-based variables, achieving efficient performance across different workflow sizes.`,
    repoLink: 'https://github.com/liowjiaxin/workflow-satisfiability-solver.git'
  },
  {
    id: 4,
    title: 'Exam Timetabling Solver',
    description: 'Constraint solver for conflict-free exam schedules with a GUI interface.',
    techStack: ['Python', 'Z3', 'PyQt'],
    details: `Implemented an intelligent exam timetabling system using the Z3 SMT solver. Modeled constraints such as room capacity, invigilator availability, and fairness for students. Developed a PyQt GUI to visualize exam schedules, student timetables, and invigilator assignments.`,
    repoLink: 'https://github.com/liowjiaxin/z3-exam-scheduler.git'
  },
  {
    id: 5,
    title: 'Smart Traffic Light System',
    description: 'Reinforcement Learning agents for adaptive traffic control in SUMO.',
    techStack: ['Python', 'Reinforcement Learning', 'SUMO', 'TensorFlow'],
    details: `Developed RL and PPO agents in SUMO to dynamically adjust signal timings and improve urban traffic flow. The system reduces waiting times, adapts to congestion, and includes emergency vehicle handling.`,
    repoLink: 'https://github.com/mmmchu/COMP3071_Smart-Traffic-Light.git'
  },
  {
    id: 6,
    title: 'Smart Fridge Application',
    description: 'IoT-powered fridge with inventory tracking, expiry alerts, and recipe suggestions.',
    techStack: ['IoT', 'Raspberry Pi', 'Python', 'Computer Vision', 'Mobile App'],
    details: `Implemented a camera-based scanning system using image classification to recognize food items and automatically update inventory. Built a mobile app for real-time access, expiry alerts, and recipe suggestions. Coordinated AI, backend, and frontend integration to ensure smooth collaboration and usability.`,
    repoLink: 'https://github.com/liowjiaxin/smart-traffic-light'
  },
  {
    id: 7,
    title: 'Flower Segmentation',
    description: 'Computer vision pipeline for flower dataset analysis.',
    techStack: ['Python', 'OpenCV'],
    details: `Applied thresholding, morphology, and contour filtering to segment flowers from complex backgrounds. Achieved >85% mean IoU, enabling accurate dataset analysis for agricultural and research applications.`,
    repoLink: 'https://github.com/liowjiaxin/flower-segmentation-pipeline.git'
  },
  {
    id: 8,
    title: 'Car Rental Web Application',
    description: 'Full-stack web app for car rental management.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    details: `Developed a full-stack system supporting user registration, car booking, and admin management. Implemented a MySQL-backed database for real-time availability, pricing, and booking history. The system streamlines rental workflows with an accessible web interface.`,
    repoLink: 'https://github.com/liowjiaxin/smart-traffic-light'
  },
  {
    id: 9,
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio site built with React.',
    techStack: ['React', 'JavaScript', 'CSS'],
    details: `Designed and developed a responsive portfolio website to showcase my projects, skills, and contact information. Focused on clean design, usability, and accessibility across desktop and mobile. Demonstrates front-end development expertise.`,
    link: 'https://github.com/liowjiaxin/liowjiaxin-portfolio'
  }
];
