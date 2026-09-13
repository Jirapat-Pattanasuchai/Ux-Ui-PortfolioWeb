import Link from 'next/link';
import { ArrowDownRight, Download } from 'lucide-react';

import { Footer } from '@/components/Footer';
import { ImageFrame } from '@/components/ImageFrame';
import { Navigation } from '@/components/Navigation';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <main className="site-shell">
      <Navigation />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            Independent portfolio · Bangkok, Thailand
          </p>

          <h1>
            Hi, I&apos;m <i>Diamond.</i>
            <br />
            UX/UI Designer.
          </h1>

          <p className="hero-text">
            I&apos;m a Computer Science graduate passionate about UX/UI Design,
            creating intuitive and meaningful digital experiences that put
            users first.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="/resume.pdf" download>
              <Download size={17} />
              Download resume
            </a>

            <Link className="button secondary" href="/projects">
              View selected work
              <ArrowDownRight size={18} />
            </Link>
          </div>
        </div>

        <div className="hero-portrait">
  <div
    className="image-frame"
    role="img"
    aria-label="Profile photo"
  >
    <img
      src="/images/new-home-pic.png"
      alt="Profile photo"
      className="image-frame-photo"
    />
  </div>

  <div className="portrait-note"></div>
</div>
      </section>

      <Reveal>
        <section className="intro-band">
          <p>
            Good design is obvious.
            <em>Great design</em> is transparent.
          </p>

          <Link href="/about">
            More about me
            <ArrowDownRight size={20} />
          </Link>
        </section>
      </Reveal>

      <section className="work-preview">
        <div className="section-top">
          <p className="eyebrow">Selected work</p>

          <h2>
            Five projects,
            <br />
            <i>five different lenses.</i>
          </h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              className={`project-tile tile-${index + 1} tone-${project.tone}`}
              key={project.slug}
            >
              <div
                className={`tile-image${
                  project.image ? ' has-image' : ''
                }`}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>

                {project.image && (
                  <img src={project.image} alt="" />
                )}

                {!project.image && (
                  <div className="tile-orb" />
                )}
              </div>

              <div className="tile-copy">
                <p>{project.kicker}</p>

                <h3>{project.title}</h3>

                <ArrowDownRight size={22} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <p className="eyebrow">Have a project in mind?</p>

        <h2>
          Let&apos;s make something
          <br />
          <i>meaningful.</i>
        </h2>

        <Link className="button primary" href="/contact">
          Get in touch
          <ArrowDownRight size={18} />
        </Link>
      </section>

      <Footer />
    </main>
  );
}