import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const SITE_URL = 'https://chaitanya.lol';

export default function Layout({
  children,
  title = 'Krishna Chaitanya — AI Product Manager & Builder',
  description = 'AI Product Manager with 5+ years building 0→1 products. Currently shipping AI agents and tools. Based in Hyderabad.',
  path = '/',
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <div className="min-h-screen px-6 md:px-12 max-w-4xl mx-auto flex flex-col justify-between">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/krishnafavicon.jpg" type="image/jpeg" />
      </Head>

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
