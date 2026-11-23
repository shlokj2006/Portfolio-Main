import SkillItem from './SkillItem.jsx'

function SkillCategory({ category, skills, context }) {
  const headingId = `skill-category-${context}-${category.id}`
  const isPrimaryFocus = category.emphasis === 'primary' && context === 'primary'

  return (
    <article
      className={`skill-category${isPrimaryFocus ? ' skill-category--focus' : ''}${context === 'learning' ? ' skill-category--learning' : ''}`}
      aria-labelledby={headingId}
    >
      {isPrimaryFocus && <p className="skill-category__label">Primary focus</p>}
      <h3 id={headingId}>{category.name}</h3>
      <ul className="skill-category__list">
        {skills.map((skill) => <SkillItem key={skill.name} skill={skill} />)}
      </ul>
    </article>
  )
}

export default SkillCategory
