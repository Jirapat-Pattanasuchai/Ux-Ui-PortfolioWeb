import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { Reveal } from '@/components/Reveal';

export default function AboutPage() {
  return (
    <main className="site-shell about-page">
      <Navigation />

      {/* =================================
          Hero
          ================================= */}

      <section className="about-hero-new">
        <Reveal className="about-hero-image-reveal">
          <div className="about-placeholder about-placeholder-hero">
            <img
              src="/images/about-hero.jpg"
              alt="About Diamond"
            />
          </div>
        </Reveal>

        <Reveal className="about-hero-heading">
          <p className="eyebrow">A little about me</p>

          <h1>
            A designer shaped by curiosity.
          </h1>
        </Reveal>
      </section>

      {/* =================================
          Introduction
          ================================= */}

      <section className="about-introduction">
        <Reveal className="about-introduction-inner">
          <div className="about-placeholder about-placeholder-small">
            <img
              src="/images/about-photo-2.png"
              alt="About Diamond"
            />
          </div>

          <div className="about-introduction-text">
            <p>
              Hi, my name is{' '}
              <span className="text-blue">Jirapat Pathanasuchai</span>, but you can call me{' '}
              <span className="text-blue">Diamond</span>.
            </p>

            <p>
              I was born in Bangkok, Thailand, on December 14, 2003.
            </p>

            <p>
              I graduated from <span className="text-blue">Suan Dusit University</span> with a degree in{' '}
              <span className="text-blue">Computer Science</span> from the Faculty of Science and Technology.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =================================
          Story
          ================================= */}

      <section className="about-story-new">
        <Reveal className="about-story-text">
          <p>
            My interest in UX/UI Design started from my passion for
            design and art. During my university projects, I was often
            assigned to take responsibility for design-related tasks,
            which gradually led me to become more interested in UX/UI
            Design.
          </p>

          <p>
            What I enjoy most about UX/UI Design is conducting research
            to explore how a product can look visually appealing while
            remaining intuitive and user-friendly. I enjoy understanding
            users and finding ways to improve the overall experience.
          </p>

          <p>
            One of my strengths is having an understanding of both
            design and development. Through working on projects
            involving both design and coding, I have gained experience
            in understanding how these two areas connect and work
            together.
          </p>

          <p>
            Outside of design, I enjoy watching movies, listening to
            music, drawing, and reading.
          </p>
        </Reveal>

        <Reveal className="about-story-image">
          <div className="about-story-photo">
            <img
              src="/images/profile-photo.jpg"
              alt="Profile photo"
            />
          </div>
        </Reveal>
      </section>

      {/* =================================
          Future Goal
          ================================= */}

      <section className="about-future">
        <Reveal>
          <p>
            My current goal is to become a UX/UI Designer and gain
            meaningful real-world experience in the field. In the
            future, I aim to become a well-rounded designer with
            stronger skills in both Design and Development, while
            continuously focusing on improving my abilities and
            overall performance.
          </p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}