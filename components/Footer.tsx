import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand.blue text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Image
            src="https://wnujoyzdpdyxblgdtxjw.supabase.co/storage/v1/object/public/gorilla-assets/zeus-piscinas/logo-a.png?v=1775759162567"
            alt="Logo ZEUS Piscinas"
            width={120}
            height={40}
          />
          <p className="mt-4">Av. de la Industria 123, Ciudad Juárez, Chihuahua</p>
          <p>Tel: +52 656 123 4567 | Email: contacto@zeus-piscinas.com</p>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} ZEUS Piscinas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
