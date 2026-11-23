function SkillItem({ skill }) {
  return (
    <li className={`skill-item${skill.learningStatus ? ' skill-item--learning' : ''}`}>
      <span className="skill-item__name">{skill.name}</span>
      <span className="skill-item__level">{skill.proficiency}</span>
    </li>
  )
}

export default SkillItem
