'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [{ href: '/', label: 'Home' }, { href: '/projects', label: 'Projects' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }];

export function Navigation() {
  const pathname = usePathname();
  return <header className="nav-wrap"><nav className="nav" aria-label="Main navigation"><Link href="/" className="wordmark">DIAMOND<span>.</span></Link><div className="nav-links">{links.map((link) => <Link className={pathname === link.href ? 'active' : ''} href={link.href} key={link.href}>{link.label}</Link>)}</div><Link className="nav-contact" href="/contact">Let&apos;s talk <span>↗</span></Link></nav></header>;
}
