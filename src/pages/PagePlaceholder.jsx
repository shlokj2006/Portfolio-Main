function PagePlaceholder({ title, description }) {
  return (
    <section className="page-placeholder" aria-labelledby="page-title">
      <p className="page-placeholder__eyebrow">Portfolio foundation</p>
      <h1 id="page-title">{title}</h1>
      <p className="page-placeholder__description">{description}</p>
    </section>
  )
}

export default PagePlaceholder
