import Link from 'next/link';
import { ArrowDownRight } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { projects } from '@/data/projects';

export default function ProjectsPage() { return <main className="site-shell"><Navigation /><section className="page-hero"><p className="eyebrow">A collection of practice</p><h1>Work that begins<br />with <i>people.</i></h1><p>From product interfaces and quality assurance to research-led systems, each project is an opportunity to make complexity feel clear.</p></section><section className="project-index">{projects.map((project, index) => <Link href={`/projects/${project.slug}`} className={`index-row tone-${project.tone}`} key={project.slug}><span>{String(index + 1).padStart(2, '0')}</span><div><p>{project.kicker}</p><h2>{project.title}</h2></div><ArrowDownRight size={31} /></Link>)}</section><Footer /></main>; }
