import { ArrowUpRight, Mail, Phone } from 'lucide-react';

import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

export default function ContactPage() {
  return (
    <main className="site-shell">
      <Navigation />

      <section className="contact-page">
        <p className="eyebrow">Start a conversation</p>

        <h1>
          Let&apos;s build an
          <br />
          <i>experience</i> together.
        </h1>

        <p className="contact-intro">
          I&apos;m always happy to connect about design, technology, and new
          opportunities.
        </p>

        <div className="contact-list">
          {/* Email */}
          <div>
            <Mail size={22} />

            <span>
              <small>Email</small>
              hikuku20@gmail.com
            </span>
          </div>

          {/* Phone */}
          <div>
            <Phone size={22} />

            <span>
              <small>Phone</small>
              081-452-7691
            </span>
          </div>

          {/* Facebook */}
          <a
            className="contact-social"
            href="https://www.facebook.com/takuya.daito.10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <small>Facebook</small>
              takuya.daito.10
            </span>

            <ArrowUpRight />
          </a>

          {/* Instagram */}
          <a
            className="contact-social"
            href="https://www.instagram.com/d.iamon._d/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <small>Instagram</small>
              d.iamon._d
            </span>

            <ArrowUpRight />
          </a>

          {/* Line ID */}
          <div>
            <span>
              <small>Line ID</small>
              hikuku46
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}