import Link from "next/link";
const Footer = () => {
  return (
    <div className="contenedor">
      <h1>Footer</h1>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/tienda">Tienda</Link>
      </nav>
    </div>
  );
};

export default Footer;
