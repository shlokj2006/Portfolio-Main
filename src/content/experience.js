import { projects } from './projects.js'

export const roles = [
  {
    id: 'ai-automation-intern',
    title: 'AI & Automation Intern',
    organization: 'HTD Resources Pvt. Ltd.',
    type: 'Internship',
    period: '6 months 2025-26',
    emphasis: 'primary',
  },
  {
    id: 'btech-culture-community-vice-president',
    title: 'Vice President',
    organization: 'BTech CSE 1st Year  Culture Community, ITM Vocational University',
    type: 'Leadership',
    period: '2024-25',
  },
]

export const projectExperience = projects.map((project) => ({
  id: project.id,
  title: project.title,
  type: 'Project',
  period: '',
  description: project.description,
  technologies: project.technologies,
}))
