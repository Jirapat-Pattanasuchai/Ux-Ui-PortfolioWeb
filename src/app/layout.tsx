import type { Metadata } from 'next';

import WaveBackground from '@/components/ui/WaveBackground';

import './globals.css';
import './voxaura.css';

export const metadata: Metadata = {
  title: 'Diamond — UX/UI Designer',
  description: 'Portfolio of Jirapat Pathanasuchai, UX/UI Designer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WaveBackground />

        <div className="site-content">
          {children}
        </div>
      </body>
    </html>
  );
}