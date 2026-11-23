export const proficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Currently Learning']

export const skillCategories = [
  { id: 'programming-languages', name: 'Programming Languages', emphasis: 'secondary' },
  { id: 'frontend-development', name: 'Frontend Development', emphasis: 'secondary' },
  { id: 'backend-development', name: 'Backend Development', emphasis: 'secondary' },
  { id: 'databases', name: 'Databases', emphasis: 'secondary' },
  { id: 'ai-machine-learning-data-science', name: 'AI, Machine Learning & Data Science', emphasis: 'primary' },
  { id: 'automation-integration', name: 'Automation & Integration', emphasis: 'secondary' },
  { id: 'tools-platforms', name: 'Tools & Platforms', emphasis: 'secondary' },
]

function createSkill(name, category, proficiency, emphasis = 'secondary') {
  return {
    name,
    category,
    proficiency,
    emphasis,
    learningStatus: proficiency === 'Currently Learning',
  }
}

export const skills = [
  createSkill("Python", "programming-languages", "Intermediate"),
  createSkill("Java", "programming-languages", "Beginner"),
  createSkill("JavaScript", "programming-languages", "Intermediate"),

  createSkill("HTML", "frontend-development", "Intermediate"),
  createSkill("CSS", "frontend-development", "Intermediate"),
  createSkill("React.js", "frontend-development", "Intermediate"),
  createSkill("React Router", "frontend-development", "Intermediate"),
  createSkill("Tailwind CSS", "frontend-development", "Intermediate"),
  createSkill("Vite", "frontend-development", "Intermediate"),
  createSkill("Axios", "frontend-development", "Intermediate"),

  createSkill("Node.js", "backend-development", "Intermediate"),
  createSkill("Express.js", "backend-development", "Intermediate"),
  createSkill("REST APIs", "backend-development", "Intermediate"),
  createSkill("Socket.IO", "backend-development", "Intermediate"),
  createSkill("JWT Authentication", "backend-development", "Intermediate"),
  createSkill("bcrypt", "backend-development", "Intermediate"),
  createSkill("Mongoose", "backend-development", "Intermediate"),

  createSkill("MongoDB", "databases", "Intermediate"),
  createSkill("MongoDB Atlas", "databases", "Intermediate"),
  createSkill("SQL", "databases", "Currently Learning"),

  createSkill(
    "Data Science fundamentals",
    "ai-machine-learning-data-science",
    "Beginner",
    "primary",
  ),
  createSkill(
    "OpenAI APIs",
    "ai-machine-learning-data-science",
    "Intermediate",
    "primary",
  ),
  createSkill(
    "Machine Learning",
    "ai-machine-learning-data-science",
    "Currently Learning",
    "primary",
  ),
  createSkill(
    "Deep Learning",
    "ai-machine-learning-data-science",
    "Currently Learning",
    "primary",
  ),
  createSkill(
    "NumPy",
    "ai-machine-learning-data-science",
    "Currently Learning",
    "primary",
  ),
  createSkill(
    "Pandas",
    "ai-machine-learning-data-science",
    "Currently Learning",
    "primary",
  ),
  createSkill(
    "TensorFlow",
    "ai-machine-learning-data-science",
    "Currently Learning",
    "primary",
  ),

  createSkill("n8n", "automation-integration", "Intermediate"),
  createSkill("Workflow Automation", "automation-integration", "Intermediate"),
  createSkill("AI API Integration", "automation-integration", "Intermediate"),
  createSkill("OmniDimension", "automation-integration", "Intermediate"),

  createSkill("Git", "tools-platforms", "Intermediate"),
  createSkill("GitHub", "tools-platforms", "Intermediate"),
  createSkill("Postman", "tools-platforms", "Intermediate"),
  createSkill("Figma", "tools-platforms", "Intermediate"),
  createSkill("Canva", "tools-platforms", "Intermediate"),
];
