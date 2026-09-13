'use client';

import { Minus, Plus, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './project-image.module.css';

const images = [
  ['Login_page.png', 'Blueledgers login screen'],
  ['Main_page_flow1.png', 'Blueledgers main dashboard'],
  ['Import_Testcase_Admin_3.png', 'Blueledgers import testcase screen'],
  ['PR_click_sidepanel(3).png', 'Blueledgers purchase request side panel'],
  ['PR_View_All_2.png', 'Blueledgers purchase request view'],
  ['Profile.png', 'Blueledgers user profile screen'],
  ['Admin_Permission_1.png', 'Blueledgers user management permissions'],
] as const;

export function InternGallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const close = () => {
    setActiveImage(null);
    setZoom(1);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === '+' || event.key === '=') setZoom((current) => Math.min(current + 0.25, 3));
      if (event.key === '-') setZoom((current) => Math.max(current - 0.25, 0.75));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return <>
    <section className={styles.gallerySection}>
      <div><p className="eyebrow">Visual archive</p><h2>Interface<br /><i>details.</i></h2><p>Open any screen for a closer look.</p></div>
      <div className={styles.gallery}>
        {images.map(([filename, alt], index) => <button className={styles.galleryButton} type="button" key={filename} onClick={() => { setActiveImage(index); setZoom(1); }} aria-label={`Open ${alt}`}><img src={`/projects/ux-ui-designer-intern/${filename}`} alt={alt} /></button>)}
      </div>
    </section>
    {activeImage !== null && <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={images[activeImage][1]} onClick={close}>
      <div className={styles.lightboxToolbar} onClick={(event) => event.stopPropagation()}>
        <span>{Math.round(zoom * 100)}%</span>
        <button type="button" onClick={() => setZoom((current) => Math.max(current - 0.25, 0.75))} aria-label="Zoom out"><Minus size={19} /></button>
        <button type="button" onClick={() => setZoom((current) => Math.min(current + 0.25, 3))} aria-label="Zoom in"><Plus size={19} /></button>
        <button type="button" onClick={close} aria-label="Close image"><X size={20} /></button>
      </div>
      <div className={styles.lightboxCanvas} onClick={(event) => event.stopPropagation()}>
        <img src={`/projects/ux-ui-designer-intern/${images[activeImage][0]}`} alt={images[activeImage][1]} style={{ transform: `scale(${zoom})` }} />
      </div>
    </div>}
  </>;
}
