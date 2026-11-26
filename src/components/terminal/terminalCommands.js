import { aboutProfile } from '../../content/about.js'
import { certificationGroups } from '../../content/certifications.js'
import { roles } from '../../content/experience.js'
import { projects } from '../../content/projects.js'
import { skills } from '../../content/skills.js'

export const commandNames = [
  'help',
  'about',
  'skills',
  'projects',
  'experience',
  'certifications',
  'contact',
  'resume',
  'clear',
  'exit',
]

const featuredProjects = projects.filter((project) => project.featured)
const certificates = certificationGroups.flatMap((group) => group.certificates)

export const terminalCommands = {
  help: () => ({
    lines: ['Available commands:', ...commandNames.map((name) => `  ${name}`)],
  }),
  about: () => ({
    lines: [aboutProfile.introduction],
  }),
  skills: () => ({
    lines: [...new Set(skills.map((skill) => skill.name))].slice(0, 12),
    links: [{ label: 'Related projects', to: '/projects' }],
  }),
  projects: () => ({
    lines: featuredProjects.map((project) => project.title),
    links: [{ label: 'All projects', to: '/projects' }],
  }),
  experience: () => ({
    lines: roles.map((role) => `${role.title} — ${role.organization} (${role.period})`),
    links: [{ label: 'Experience', to: '/experience' }],
  }),
  certifications: () => ({
    lines: [`${certificates.length} certificates across ${certificationGroups.filter((group) => group.certificates.length).length} providers.`],
    links: [{ label: 'View certifications', to: '/certifications' }],
  }),
  contact: () => ({
    lines: ['Open the contact page to get in touch.'],
    links: [{ label: 'Contact', to: '/contact' }],
  }),
  resume: () => ({
    lines: ['Open the resume page.'],
    links: [{ label: 'Resume', to: '/resume' }],
  }),
}
