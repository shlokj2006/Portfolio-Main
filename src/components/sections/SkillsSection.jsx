import { skillCategories, skills } from '../../content/skills.js'
import SkillCategory from '../skills/SkillCategory.jsx'

function SkillsSection() {
  const focusCategories = skillCategories.filter((category) => category.emphasis === 'primary')
  const supportingCategories = skillCategories.filter((category) => category.emphasis !== 'primary')
  const learningCategories = skillCategories
    .map((category) => ({
      ...category,
      skills: skills.filter((skill) => skill.category === category.id && skill.learningStatus),
    }))
    .filter((category) => category.skills.length > 0)

  function getCategorySkills(category) {
    return skills.filter((skill) => skill.category === category.id && !skill.learningStatus)
  }

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <header className="skills-section__intro">
        <p className="page-placeholder__eyebrow">Technical toolkit</p>
        <h2 id="skills-title">Technical Skills</h2>
        <p>
          A categorized view of my technical focus and proficiency. AI, Machine Learning,
          and Data Science are my primary focus areas.
        </p>
      </header>

      <div className="skills-grid skills-grid--focus" role="group" aria-label="Primary focus skills">
        {focusCategories.map((category) => (
          <SkillCategory
            key={category.id}
            category={category}
            skills={getCategorySkills(category)}
            context="primary"
          />
        ))}
      </div>

      <section className="skills-learning" aria-labelledby="skills-learning-title">
        <header className="skills-learning__intro">
          <p className="page-placeholder__eyebrow">Active learning</p>
          <h3 id="skills-learning-title">Currently Learning</h3>
          <p>These are the technologies I’m actively studying now.</p>
        </header>
        <div className="skills-grid skills-grid--learning">
          {learningCategories.map((category) => (
            <SkillCategory
              key={category.id}
              category={category}
              skills={category.skills}
              context="learning"
            />
          ))}
        </div>
      </section>

      <div className="skills-grid skills-grid--supporting" role="group" aria-label="Supporting skill categories">
        {supportingCategories.map((category) => (
          <SkillCategory
            key={category.id}
            category={category}
            skills={getCategorySkills(category)}
            context="supporting"
          />
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
