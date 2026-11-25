import { useState } from 'react';
import TopBar from './components/TopBar';
import Tile from './components/Tile';
import ApiPlayground from './components/ApiPlayground';
import ContactRow from './components/ContactRow';
import { concepts } from './data/concepts';
import { apiRoutes } from './data/apiRoutes';
import { experience, languagesSpoken, education, contact } from './data/profile';

const developer = apiRoutes['/api/developer'];
const skills = apiRoutes['/api/skills'];
const { projects } = apiRoutes['/api/projects'];
const [firstName, lastName] = developer.full_name.split(' ');

export default function App() {
  const [inspectOn, setInspectOn] = useState(false);

  return (
    <div className={inspectOn ? 'inspect' : ''}>
      <div className="wrap">
        <TopBar inspectOn={inspectOn} setInspectOn={setInspectOn} />

        <main className="grid grid-cols-12 gap-x-5 gap-y-6" data-concept={concepts.grid}>
          <Tile className="col-span-12 md:col-span-8 bg-tile-blue text-on-tile" concept={concepts.tokens}>
            <p className="tag">{developer.location}</p>
            <h1 data-concept={concepts.fluidType}>
              <span>{firstName}</span>
              <span>{lastName}</span>
            </h1>
            <p className="role">
              <mark>{developer.job_title}</mark>
            </p>
            <p className="lede">
              I build responsive, scalable web apps with React, Node.js and Laravel, from the screen a user sees to the API and
              database behind it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" className="btn primary" data-concept={concepts.state} onClick={() => setInspectOn(!inspectOn)}>
                {inspectOn ? 'Hide the inspect labels' : 'Show how this page is built'}
              </button>
              <a className="btn" href={contact.githubUrl} target="_blank" rel="noopener noreferrer" data-concept={concepts.anchors}>
                GitHub &#8599;
              </a>
              <a className="btn" href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn &#8599;
              </a>
            </div>
          </Tile>

          <Tile className="col-span-12 md:col-span-4 bg-tile-yellow text-on-tile" concept={concepts.semanticList}>
            <p className="tag">Currently</p>
            <dl className="facts">
              <div>
                <dt>Role</dt>
                <dd>{experience.role}</dd>
              </div>
              <div>
                <dt>Company</dt>
                <dd>{developer.company_name}</dd>
              </div>
              <div>
                <dt>Since</dt>
                <dd>{experience.since}</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>{languagesSpoken}</dd>
              </div>
            </dl>
          </Tile>

          <Tile className="col-span-12 md:col-span-5" concept={concepts.component}>
            <p className="tag">Experience</p>
            <h2>{experience.role}</h2>
            <div className="meta" data-concept={concepts.flex}>
              <span>{experience.company}</span>
              <span>{experience.period}</span>
            </div>
            <ul className="sq">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Tile>

          <Tile className="col-span-12 md:col-span-7 bg-term-bg text-term-fg" concept={concepts.rest}>
            <ApiPlayground />
          </Tile>

          <Tile className="col-span-12 md:col-span-7 bg-tile-pink text-on-tile">
            <p className="tag">Skills</p>
            <dl className="grid gap-4" data-concept={concepts.chips}>
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="grid items-baseline gap-x-4 gap-y-1 sm:grid-cols-[7.5rem_minmax(0,1fr)]">
                  <dt className="font-mono text-xs uppercase tracking-widest">{group}</dt>
                  <dd className="m-0 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Tile>

          <Tile className="col-span-12 md:col-span-5" concept={concepts.responsive}>
            <p className="tag">Education</p>
            <div className="grid gap-5">
              {education.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.place}</p>
                </div>
              ))}
            </div>
          </Tile>

          <Tile className="col-span-12">
            <p className="tag">Projects</p>
            <h2>Code you can read</h2>
            <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4" data-concept={concepts.autoFit}>
              {projects.map((project) => (
                <a key={project.repo_url} className="card" href={project.repo_url} target="_blank" rel="noopener noreferrer">
                  <h3>{project.project_name}</h3>
                  <span className="slug">{project.repo_url.replace('https://github.com/', '')}</span>
                  <span className="go">Open on GitHub &#8599;</span>
                </a>
              ))}
            </div>
          </Tile>

          <Tile className="col-span-12 md:col-span-7 bg-tile-mint text-on-tile" concept={concepts.list}>
            <p className="tag">How this page is built</p>
            <h2>React, Vite and Tailwind CSS</h2>
            <p className="mt-3">Every concept below is used in this project. Turn on Inspect mode to see where.</p>
            <ul className="concepts">
              {Object.values(concepts).map((label) => {
                const [title, ...detailParts] = label.split(' · ');
                return (
                  <li key={label}>
                    <strong>{title}</strong>
                    <span>{detailParts.join(' · ')}</span>
                  </li>
                );
              })}
            </ul>
          </Tile>

          <Tile className="col-span-12 md:col-span-5 bg-tile-yellow text-on-tile" concept={concepts.props}>
            <p className="tag">Contact</p>
            <div className="contact">
              <ContactRow label="Email" value={contact.email} canCopy copyConcept={concepts.clipboard} />
              <ContactRow label="Phone" value={contact.phone} canCopy />
              <ContactRow label="LinkedIn" value={contact.linkedinLabel} href={contact.linkedinUrl} />
              <ContactRow label="GitHub" value={contact.githubLabel} href={contact.githubUrl} />
            </div>
          </Tile>
        </main>

        <footer className="foot" data-concept={concepts.vite}>
          <span>{developer.full_name}</span>
          <span>{developer.location}</span>
        </footer>
      </div>
    </div>
  );
}
