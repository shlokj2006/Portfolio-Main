import { Link } from 'react-router-dom'
import { projects } from '../content/projects.js'

const workflowStages = [
  {
    title: 'Generate',
    description: 'The pipeline uses OpenAI GPT-4.1-mini for text and Hugging Face FLUX.1-schnell for image generation.',
  },
  {
    title: 'Review',
    description: 'Generated content passes through a human approval step before it can be published to LinkedIn.',
  },
  {
    title: 'Distribute',
    description: 'Approved content is distributed through LinkedIn. Google Sheets supports content data and tracking.',
  },
]

const features = [
  {
    title: 'AI text generation',
    description: 'OpenAI GPT-4.1-mini supports content generation in the workflow.',
  },
  {
    title: 'AI image generation',
    description: 'Hugging Face FLUX.1-schnell is used to generate images for content.',
  },
  {
    title: 'Content data and tracking',
    description: 'Google Sheets is integrated for content data and tracking.',
  },
  {
    title: 'Email notifications',
    description: 'Gmail / SMTP provides email notifications related to the workflow.',
  },
  {
    title: 'Workflow communication',
    description: 'Telegram is integrated for workflow communication and notifications.',
  },
  {
    title: 'Human-reviewed publishing',
    description: 'A person approves content before LinkedIn distribution.',
  },
]

const technologyGroups = [
  { title: 'Workflow orchestration', technologies: ['n8n'] },
  { title: 'AI models', technologies: ['OpenAI GPT-4.1-mini', 'Hugging Face FLUX.1-schnell'] },
  { title: 'Storage and tracking', technologies: ['Google Sheets'] },
  { title: 'Communication', technologies: ['Gmail / SMTP', 'Telegram'] },
  { title: 'Publishing', technologies: ['LinkedIn'] },
  { title: 'Scripting', technologies: ['JavaScript'] },
]

function AIContentAutomationPage() {
  const project = projects.find((item) => item.id === 'ai-content-automation-pipeline')

  if (!project) return null

  return (
    <article className="case-study" aria-labelledby="ai-content-title">
      <header className="case-study__hero">
        <div className="case-study__hero-copy">
          <p className="page-placeholder__eyebrow">Project case study · AI Automation</p>
          <h1 id="ai-content-title">{project.title}</h1>
          <p className="case-study__summary">
            An n8n-based workflow for AI-powered content generation, human review, and distribution.
          </p>
          <ul className="case-study__tags" aria-label="Project categories">
            <li>AI Automation</li>
            <li>Workflow Automation</li>
          </ul>
        </div>
      </header>

      <section className="case-study__section" aria-labelledby="ai-content-overview">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">01 · Purpose</p>
          <h2 id="ai-content-overview">Overview</h2>
        </div>
        <div className="case-study__overview-grid">
          <div className="case-study__panel">
            <h3>What it does</h3>
            <p>
              The pipeline coordinates AI-assisted text and image creation with review and distribution in an n8n workflow.
              Google Sheets is used for content data and tracking, while Gmail / SMTP and Telegram provide notifications
              and workflow communication.
            </p>
          </div>
          <div className="case-study__panel">
            <h3>Problem addressed</h3>
            <p>
              Creating and distributing content involves multiple tools and a review step. This workflow brings those
              activities together while retaining human approval before LinkedIn publishing.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="ai-content-architecture">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">02 · Process</p>
          <h2 id="ai-content-architecture">Workflow Architecture</h2>
          <p className="case-study__section-intro">
            n8n orchestrates the workflow across the listed generation, tracking, communication, and publishing
            integrations. The confirmed lifecycle is generation, review, then distribution; the detailed node layout is
            not available in the project materials.
          </p>
        </div>
        <ol className="case-study__architecture-flow" aria-label="Confirmed high-level workflow stages">
          {workflowStages.map((stage) => (
            <li className="case-study__panel" key={stage.title}>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
        <p className="case-study__section-intro">
          This is a lifecycle summary, not a node-level workflow diagram. Exact n8n nodes, triggers, branches, and
          integration connections are omitted because no workflow export or verified diagram is available.
        </p>
      </section>

      <section className="case-study__section" aria-labelledby="ai-content-features">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">03 · Capabilities</p>
          <h2 id="ai-content-features">Key Features</h2>
        </div>
        <div className="case-study__feature-grid">
          {features.map((feature) => (
            <article className="case-study__panel case-study__feature" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="ai-content-stack">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">04 · Integrations</p>
          <h2 id="ai-content-stack">Technology Stack</h2>
        </div>
        <div className="case-study__stack-grid">
          {technologyGroups.map((group) => (
            <section className="case-study__panel" key={group.title} aria-label={group.title}>
              <h3>{group.title}</h3>
              <ul className="case-study__tags">
                {group.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="ai-content-implementation">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">05 · Build</p>
          <h2 id="ai-content-implementation">Implementation Details</h2>
        </div>
        <div className="case-study__panel case-study__narrative">
          <p>
            n8n coordinates the integrations. GPT-4.1-mini generates text and FLUX.1-schnell generates images; Google
            Sheets handles content data and tracking. Gmail / SMTP and Telegram support notifications and workflow
            communication. LinkedIn distribution is gated by human approval. JavaScript provides custom workflow logic.
          </p>
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="ai-content-learning">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">06 · Considerations</p>
          <h2 id="ai-content-learning">Challenges and Learning</h2>
        </div>
        <div className="case-study__overview-grid">
          <div className="case-study__panel">
            <h3>Review before publishing</h3>
            <p>
              The approval step keeps a person involved before content is distributed through LinkedIn. The workflow
              therefore combines automation with an explicit editorial decision point.
            </p>
          </div>
          <div className="case-study__panel">
            <h3>Integration boundaries</h3>
            <p>
              The available project information confirms the services and their broad purposes, but does not document
              triggers, retry behavior, error handling, or the exact node connections. Those implementation details are
              intentionally not inferred here.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study__section case-study__navigation" aria-labelledby="ai-content-navigation">
        <div>
          <p className="page-placeholder__eyebrow">07 · Continue exploring</p>
          <h2 id="ai-content-navigation">Project Navigation</h2>
          <p className="case-study__section-intro">No verified public demo or repository link is currently listed for this project.</p>
        </div>
        <Link className="case-study__back-link" to="/projects">Back to all projects</Link>
      </section>
    </article>
  )
}

export default AIContentAutomationPage
