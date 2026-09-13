import Link from 'next/link';

export function Footer() { return <footer className="footer"><p>© {new Date().getFullYear()} Diamond. Designed with care.</p><Link href="mailto:hikuku20@gmail.com">hikuku20@gmail.com ↗</Link></footer>; }
