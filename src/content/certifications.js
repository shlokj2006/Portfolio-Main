import nptelJava from '../../assets/Certificates/Programming in java.jpeg'
import basicMachineLearning from '../../assets/Certificates/Basic of machine learning certificate.pdf'
import cForBeginners from '../../assets/Certificates/C for beginners.pdf'
import completeWebDevelopment from '../../assets/Certificates/Completewebdev.pdf'
import criticalThinking from '../../assets/Certificates/Critical Thinking in the AI Era.pdf'
import dataScienceFoundations from '../../assets/Certificates/Data science foundation certificate.pdf'
import figmaUx from '../../assets/Certificates/Figma certificate.pdf'
import generativeAi from '../../assets/Certificates/GEN-AI For Beginners 2026.pdf'
import gitGithub from '../../assets/Certificates/Git, Github certificate.pdf'
import html from '../../assets/Certificates/Html certificate.pdf'
import javascript from '../../assets/Certificates/JavaScript.pdf'
import fullStack from '../../assets/Certificates/Master course in full stack development.pdf'
import n8nGuide from '../../assets/Certificates/N8N - Ai Agent creation Guide .pdf'
import roboticsAi from '../../assets/Certificates/Robotics and ai certificate .pdf'
import seo from '../../assets/Certificates/Seo for beginners certificate.pdf'
import n8nAgents from '../../assets/Certificates/AI Agents Using n8n.png'
import aiVoiceAssistant from '../../assets/Certificates/Ai assistant using Mernstack Bootcamp.png'
import javascriptReactTodo from '../../assets/Certificates/Mastery in JavaScript & React Learn to Build a TP_DO App With Local Storage.png'
import reactProjectBootcamp from '../../assets/Certificates/ReactprojectBootcamp.png'

export const certificationGroups = [
  {
    id: 'nptel',
    title: 'NPTEL',
    certificates: [
      {
        id: 'programming-in-java',
        title: 'Programming in Java',
        provider: 'NPTEL · IIT Kharagpur',
        date: 'Jan–Apr 2026',
        type: 'Elite online certification',
        score: '95%',
        details: [
          ['Roll number', 'NPTEL26CS36S751100232'],
          ['Recommended credits', '4'],
          ['Online assignments', '24.78 / 25'],
          ['Proctored exam', '70.5 / 75'],
        ],
        asset: nptelJava,
        format: 'image',
        featured: true,
      },
    ],
  },
  {
    id: 'coursera',
    title: 'Coursera',
    certificates: [],
  },
  {
    id: 'udemy',
    title: 'Udemy',
    certificates: [
      {
        id: 'complete-web-development',
        title: 'Complete Web Development: 22 Courses in 1',
        provider: 'Udemy · Creative Online School',
        date: 'Aug 13, 2025',
        duration: '11.5 hours',
        details: [['Certificate number', 'UC-8f74f248-90b7-4287-9f58-36a7a5cb4b22']],
        asset: completeWebDevelopment,
        format: 'pdf',
      },
      {
        id: 'figma-ux-design',
        title: 'User Experience Design - Learn UI UX App Design with Figma',
        provider: 'Udemy · Gihan Akalanka',
        date: 'Jul 24, 2025',
        duration: '7 hours',
        details: [['Certificate number', 'UC-e03bb5d5-912c-4444-8351-d09ba74e5eed']],
        asset: figmaUx,
        format: 'pdf',
      },
      {
        id: 'generative-ai-beginners',
        title: 'Generative AI for Beginners: Zero to Expert in One Day 2026',
        provider: 'Udemy · Manish Patel and Pavan Kumar',
        date: 'Jan 7, 2026',
        duration: '3 hours',
        details: [['Certificate number', 'UC-6fb58720-7efd-428f-94d5-8e50c04d7d20']],
        asset: generativeAi,
        format: 'pdf',
      },
      {
        id: 'git-gitlab-github-fundamentals',
        title: 'Git, GitLab, GitHub Fundamentals for Software Developers',
        provider: 'Udemy · MTF Institute of Management, Technology and Finance',
        date: 'Aug 28, 2025',
        duration: '1 hour',
        details: [['Certificate number', 'UC-70c6457e-5b4a-4bbe-aac8-dc01bc3a7083']],
        asset: gitGithub,
        format: 'pdf',
      },
      {
        id: 'javascript-mastery',
        title: 'JavaScript Mastery From Basics to Advanced',
        provider: 'Udemy · Mehmood Khalil',
        date: 'Nov 27, 2024',
        duration: '3.5 hours',
        details: [['Certificate number', 'UC-77584961-1b8e-4ed6-af75-1b045833a39d']],
        asset: javascript,
        format: 'pdf',
      },
      {
        id: 'n8n-ai-agent-creation-guide',
        title: 'N8N: AI Agent Creation Guide',
        provider: 'Udemy · Anton Voroniuk, Anton Voroniuk Support, Eugene Vyborov',
        date: 'Jan 19, 2026',
        duration: '4 hours',
        details: [['Certificate number', 'UC-bd5bbce2-d600-42c7-acae-73352d05b408']],
        asset: n8nGuide,
        format: 'pdf',
      },
    ],
  },
  {
    id: 'other-providers',
    title: 'Other Providers',
    certificates: [
      {
        id: 'ai-agents-n8n',
        title: 'AI Agents using n8n',
        provider: 'Lets Upgrade · in collaboration with Edutech Training Pvt. Ltd.',
        date: 'Sep 20, 2025',
        type: 'Certificate of completion · 3-day course',
        details: [['Course dates', 'Sep 18–20, 2025']],
        asset: n8nAgents,
        format: 'image',
      },
      {
        id: 'ai-voice-assistant-mern',
        title: 'Build an AI Voice Assistant with MERN Stack!',
        provider: 'SkillEcted Campus Program',
        date: 'Jul 30, 2025',
        type: 'Certificate of participation',
        details: [['Certificate code', 'XDU1SVSI']],
        asset: aiVoiceAssistant,
        format: 'image',
      },
      {
        id: 'javascript-react-local-storage-todo',
        title: 'Mastery in JavaScript & React: Build a To-Do App with Local Storage',
        provider: 'SkillEcted Campus Program',
        date: 'Jul 30, 2025',
        type: 'Certificate of participation',
        details: [['Certificate code', 'UIWCMVIS']],
        asset: javascriptReactTodo,
        format: 'image',
      },
      {
        id: 'react-project-bootcamp',
        title: 'React Project Bootcamp: Build a To-Do App',
        provider: 'SkillEcted Campus Program',
        date: 'Aug 3, 2025',
        type: 'Certificate of participation',
        details: [['Certificate code', 'N4GXUURK']],
        asset: reactProjectBootcamp,
        format: 'image',
      },
      {
        id: 'basics-machine-learning',
        title: 'Basics of Machine Learning',
        provider: 'Great Learning Academy',
        date: 'Sep 2024',
        details: [['Verification code', 'NZHPEYDX']],
        asset: basicMachineLearning,
        format: 'pdf',
      },
      {
        id: 'c-for-beginners',
        title: 'C for Beginners',
        provider: 'Great Learning Academy',
        date: 'Nov 2024',
        details: [['Verification code', 'OXXHFWLJ']],
        asset: cForBeginners,
        format: 'pdf',
      },
      {
        id: 'data-science-foundations',
        title: 'Data Science Foundations',
        provider: 'Great Learning Academy',
        date: 'Aug 2024',
        details: [['Verification code', 'EHBWCLSG']],
        asset: dataScienceFoundations,
        format: 'pdf',
      },
      {
        id: 'frontend-development-html',
        title: 'Front End Development - HTML',
        provider: 'Great Learning Academy',
        date: 'Aug 2024',
        details: [['Verification code', 'KGFOOGDM']],
        asset: html,
        format: 'pdf',
      },
      {
        id: 'master-course-full-stack-development',
        title: 'Master Course in Full Stack Development',
        provider: 'Great Learning Academy',
        date: 'Nov 2024',
        details: [['Verification code', 'FPLLJFTAH']],
        asset: fullStack,
        format: 'pdf',
      },
      {
        id: 'robotics-and-ai',
        title: 'Robotics and AI',
        provider: 'Great Learning Academy',
        date: 'Sep 2024',
        details: [['Verification code', 'TIYRIKWN']],
        asset: roboticsAi,
        format: 'pdf',
      },
      {
        id: 'seo-for-beginners-live-session',
        title: 'SEO for Beginners [Live Session]',
        provider: 'Great Learning Academy',
        details: [['Verification code', 'ILVEKVFJ']],
        asset: seo,
        format: 'pdf',
      },
      {
        id: 'critical-thinking-in-the-ai-era',
        title: 'Critical Thinking in the AI Era',
        provider: 'HP LIFE · HP Foundation',
        date: 'Feb 24, 2026',
        details: [['Certificate serial number', '8e58568c-7c1d-45af-9b69-5c1278bce638']],
        asset: criticalThinking,
        format: 'pdf',
      },
    ],
  },
]
