'use client';

import { Minus, Plus, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import styles from './project-image.module.css';

const images = [
  [
    'karaoke-screen-01.png',
    'Online Karaoke System main page',
  ],
  [
    'karaoke-screen-02.png',
    'Online Karaoke System karaoke player',
  ],
  [
    'karaoke-screen-03.png',
    'Online Karaoke System song management',
  ],
  [
    'karaoke-screen-04.png',
    'Online Karaoke System login page',
  ],
  [
    'karaoke-screen-05.png',
    'Online Karaoke System community page',
  ],
] as const;

export function KaraokeGallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const close = () => {
    setActiveImage(null);
    setZoom(1);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }

      if (event.key === '+' || event.key === '=') {
        setZoom((current) => Math.min(current + 0.25, 3));
      }

      if (event.key === '-') {
        setZoom((current) => Math.max(current - 0.25, 0.75));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <section className={styles.gallerySection}>
        <div>
          <p className="eyebrow">Visual archive</p>

          <h2>
            Online Karaoke
            <br />
            <i>System.</i>
          </h2>

          <p>
            Open any screen for a closer look.
          </p>
        </div>

        <div className={styles.gallery}>
          {images.map(([filename, alt], index) => (
            <button
              className={styles.galleryButton}
              type="button"
              key={filename}
              onClick={() => {
                setActiveImage(index);
                setZoom(1);
              }}
              aria-label={`Open ${alt}`}
            >
              <img
                src={`/projects/online-karaoke-system/${filename}`}
                alt={alt}
              />
            </button>
          ))}
        </div>
      </section>

      {activeImage !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={images[activeImage][1]}
          onClick={close}
        >
          <div
            className={styles.lightboxToolbar}
            onClick={(event) => event.stopPropagation()}
          >
            <span>{Math.round(zoom * 100)}%</span>

            <button
              type="button"
              onClick={() =>
                setZoom((current) =>
                  Math.max(current - 0.25, 0.75)
                )
              }
              aria-label="Zoom out"
            >
              <Minus size={19} />
            </button>

            <button
              type="button"
              onClick={() =>
                setZoom((current) =>
                  Math.min(current + 0.25, 3)
                )
              }
              aria-label="Zoom in"
            >
              <Plus size={19} />
            </button>

            <button
              type="button"
              onClick={close}
              aria-label="Close image"
            >
              <X size={20} />
            </button>
          </div>

          <div
            className={styles.lightboxCanvas}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={`/projects/online-karaoke-system/${images[activeImage][0]}`}
              alt={images[activeImage][1]}
              style={{
                transform: `scale(${zoom})`,
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}