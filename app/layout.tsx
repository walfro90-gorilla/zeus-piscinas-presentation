import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ZEUS Piscinas - Construcción y mantenimiento de piscinas de lujo en Ciudad Juárez, Chihuahua',
  description: 'En ZEUS Piscinas ofrecemos ingeniería de vanguardia y servicio experto para tu piscina de lujo en Ciudad Juárez. Diseño, construcción y mantenimiento con proyección 2027.',
  keywords: ['piscinas de lujo','construcción de piscinas','mantenimiento de piscinas','Ciudad Juárez','ZEUS Piscinas'],
  openGraph: {
    title: 'ZEUS Piscinas - Piscinas de Lujo',
    description: 'Servicio profesional de construcción y mantenimiento de piscinas en Ciudad Juárez.',
    url: 'https://zeus-piscinas.com',
    siteName: 'ZEUS Piscinas',
    images: [
      {
        url: 'https://wnujoyzdpdyxblgdtxjw.supabase.co/storage/v1/object/public/gorilla-assets/zeus-piscinas/logo-a.png?v=1775759162567',
        width: 800,
        height: 600,
        alt: 'Logo ZEUS Piscinas'
      }
    ],
    locale: 'es_MX',
    type: 'website'
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: 'ZEUS Piscinas',
  image: ['https://wnujoyzdpdyxblgdtxjw.supabase.co/storage/v1/object/public/gorilla-assets/zeus-piscinas/logo-a.png?v=1775759162567'],
  telephone: '+52 656 123 4567',
  address: {
    "@type": "PostalAddress",
    streetAddress: 'Av. de la Industria 123',
    addressLocality: 'Ciudad Juárez',
    addressRegion: 'Chihuahua',
    postalCode: '32300',
    addressCountry: 'MX'
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.6904,
    longitude: -106.4245
  },
  url: 'https://zeus-piscinas.com',
  priceRange: '$$$'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
