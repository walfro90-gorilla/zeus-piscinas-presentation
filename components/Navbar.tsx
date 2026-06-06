import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md fixed w-full z-10">
      <Link href="/">
        <a className="flex items-center">
          <Image
            src="https://wnujoyzdpdyxblgdtxjw.supabase.co/storage/v1/object/public/gorilla-assets/zeus-piscinas/logo-a.png?v=1775759162567"
            alt="Logo ZEUS Piscinas"
            width={120}
            height={40}
          />
        </a>
      </Link>
      <div className="space-x-6">
        <a href="#services" className="text-gray-700 hover:text-brand.blue">Servicios</a>
        <a href="#gallery" className="text-gray-700 hover:text-brand.blue">Galería</a>
        <a href="#testimonials" className="text-gray-700 hover:text-brand.blue">Testimonios</a>
        <a href="#contact" className="text-gray-700 hover:text-brand.blue">Contacto</a>
      </div>
    </nav>
  );
}
