'use client';

import { Minus, Plus, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './project-image.module.css';

const images = [
  ['S__25133060.jpg', 'Calendar event management screen'],
  ['S__25133061.jpg', 'Calendar home screen'],
  ['S__25133062.jpg', 'Calendar login screen'],
  ['S__25133063.jpg', 'Calendar activity list'],
  ['S__25133064.jpg', 'Calendar archive screen'],
  ['S__25133065.jpg', 'Calendar user management screen'],
] as const;

export function CalendarGallery() {
  const [active, setActive] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const close = () => { setActive(null); setZoom(1); };
  useEffect(() => { const listener = (event: KeyboardEvent) => { if (event.key === 'Escape') close(); if (event.key === '+' || event.key === '=') setZoom((value) => Math.min(value + .25, 3)); if (event.key === '-') setZoom((value) => Math.max(value - .25, .75)); }; window.addEventListener('keydown', listener); return () => window.removeEventListener('keydown', listener); }, []);
  return <><section className={styles.gallerySection}><div><p className="eyebrow">Visual archive</p><h2>Calendar<br /><i>screens.</i></h2><p>Open any screen for a closer look.</p></div><div className={styles.gallery}>{images.map(([filename, alt], index) => <button className={styles.galleryButton} type="button" key={filename} onClick={() => { setActive(index); setZoom(1); }} aria-label={`Open ${alt}`}><img src={`/projects/calendar-website/${filename}`} alt={alt} /></button>)}</div></section>{active !== null && <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={images[active][1]} onClick={close}><div className={styles.lightboxToolbar} onClick={(event) => event.stopPropagation()}><span>{Math.round(zoom * 100)}%</span><button type="button" onClick={() => setZoom((value) => Math.max(value - .25, .75))} aria-label="Zoom out"><Minus size={19} /></button><button type="button" onClick={() => setZoom((value) => Math.min(value + .25, 3))} aria-label="Zoom in"><Plus size={19} /></button><button type="button" onClick={close} aria-label="Close image"><X size={20} /></button></div><div className={styles.lightboxCanvas} onClick={(event) => event.stopPropagation()}><img src={`/projects/calendar-website/${images[active][0]}`} alt={images[active][1]} style={{ transform: `scale(${zoom})` }} /></div></div>}</>;
}
