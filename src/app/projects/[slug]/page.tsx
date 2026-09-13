import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './project-image.module.css';

import { InternGallery } from './InternGallery';
import { CalendarGallery } from './CalendarGallery';
import { KaraokeGallery } from './KaraokeGallery';

import { Footer } from '@/components/Footer';
import { ImageFrame } from '@/components/ImageFrame';
import { Navigation } from '@/components/Navigation';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const isUxUiDesignerIntern =
    project.slug === 'ux-ui-designer-intern';

  const isCalendarWebsite =
    project.slug === 'calendar-website';

  const isAuccConference =
    project.slug === 'aucc-2026-conference';

  const isQaTesterIntern =
    project.slug === 'qa-tester-intern';

  const isOnlineKaraokeSystem =
    project.slug === 'online-karaoke-system';

  return (
    <main className={`site-shell project-page tone-${project.tone}`}>
      <Navigation />

      {/* ================================
          Project Hero
      ================================= */}

      <section className="case-hero">
        <Link className="back-link" href="/projects">
          <ArrowLeft size={18} />
          All projects
        </Link>

        <p className="eyebrow">{project.kicker}</p>

        <h1>{project.title}</h1>

        {isUxUiDesignerIntern ? (
          <div className={`case-hero-image ${styles.photo}`}>
            <Image
              src="/projects/ux-ui-designer-intern/blueledgers-guidance-platform.png"
              alt="Blueledgers Guidance Platform displayed on a Dell monitor"
              fill
              priority
              sizes="92vw"
            />
          </div>
        ) : isCalendarWebsite ? (
          <figure className={styles.originalImage}>
            <img
              src="/projects/calendar-website/Mock%20up%20Calendar%20website.png"
              alt="School Calendar Website shown across desktop screens"
            />
          </figure>
        ) : isAuccConference ? (
          <figure className={styles.originalImage}>
            <img
              src="/projects/aucc-2026-conference/aucc-certificate.png"
              alt="AUCC 2026 conference award certificate"
            />
          </figure>
        ) : isQaTesterIntern ? (
          <figure className={styles.originalImage}>
            <img
              src="/projects/qa-tester-intern/qa-laptop-mockup.png"
              alt="Blueledgers dashboard displayed on a floating laptop"
            />
          </figure>
        ) : isOnlineKaraokeSystem ? (
          <figure className={styles.originalImage}>
            <img
              src="/projects/online-karaoke-system/karaoke-hero.png"
              alt="Online Karaoke System"
            />
          </figure>
        ) : (
          <ImageFrame
            label={`${project.title} hero visual`}
            className="case-hero-image"
          />
        )}
      </section>

      {/* ================================
          Overview + My Role
      ================================= */}

      <section className="case-overview">
        <div>
          <p className="eyebrow">Overview</p>

          <h2>{project.overview}</h2>
        </div>

        <div className="role-panel">
          <p className="eyebrow">My Role</p>

          <p>{project.role}</p>

          <ul>
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================
          Main Project Image
      ================================= */}

      {isUxUiDesignerIntern ? (
        <figure className={styles.originalImage}>
          <img
            src="/projects/ux-ui-designer-intern/blueledgers-guidance-platform-details.png"
            alt="Blueledgers Guidance Platform interface screens and user flows"
          />
        </figure>
      ) : isQaTesterIntern ? (
        <figure className={styles.originalImage}>
          <img
            src="/projects/qa-tester-intern/internship-summary.png"
            alt="QA Tester internship summary and automated testing workspace"
          />
        </figure>
      ) : isCalendarWebsite ||
        isAuccConference ||
        isOnlineKaraokeSystem ? null : (
        <ImageFrame
          label={`${project.title} feature visual`}
          className="feature-placeholder"
        />
      )}

      {/* ================================
          Project Story
      ================================= */}

      <section className="narrative">
        <div className="sticky-title">
          <p className="eyebrow">The project story</p>

          <h2>
            From friction
            <br />
            to <i>focus.</i>
          </h2>
        </div>

        <div className="narrative-content">

          {/* The Challenge */}

          <Reveal>
            <article>
              <p className="eyebrow">The Challenge</p>

              <p>{project.problem}</p>
            </article>
          </Reveal>

          {/* Process */}

          <Reveal>
            <article>
              <p className="eyebrow">Process</p>

              <p>{project.process}</p>
            </article>
          </Reveal>

          {/* Outcome */}

          <Reveal>
            <article>
              <p className="eyebrow">Outcome</p>

              <p>{project.outcome}</p>
            </article>
          </Reveal>

        </div>
      </section>

      {/* ================================
          Project Gallery
      ================================= */}

      {isUxUiDesignerIntern ? (
        <InternGallery />
      ) : isCalendarWebsite ? (
        <CalendarGallery />
      ) : isOnlineKaraokeSystem ? (
        <KaraokeGallery />
      ) : isAuccConference || isQaTesterIntern ? null : (
        <section className="gallery-section">
          <div>
            <p className="eyebrow">Visual archive</p>

            <h2>
              Project details,
              <br />
              <i>waiting for your work.</i>
            </h2>

            <p>
              Add any number of project images here. Each frame
              is ready to become a detailed, clickable gallery image.
            </p>
          </div>

          <div className="case-gallery">
            <ImageFrame label="Gallery image 01" />
            <ImageFrame label="Gallery image 02" />
            <ImageFrame label="Gallery image 03" />
          </div>
        </section>
      )}

      {/* ================================
          Next Project / Contact
      ================================= */}

      {isAuccConference ? (
        <section
          className={`project-next ${styles.auccActions}`}
        >
          <a
            className={styles.downloadButton}
            href="/projects/aucc-2026-conference/AUCC2026-text-comments-clustering.pdf"
            download
          >
            View my work
            <Download size={20} />
          </a>

          <Link
            className={styles.contactLink}
            href="/contact"
          >
            Let&apos;s work together
            <ArrowUpRight size={18} />
          </Link>
        </section>
      ) : (
        <section className="project-next">
          <Link href="/contact">
            Let&apos;s work together
            <ArrowUpRight size={28} />
          </Link>
        </section>
      )}

      <Footer />
    </main>
  );
}