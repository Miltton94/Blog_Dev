const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center gap-4 border-l-4 border-green-500 px-1 md:flex-col md:border-none md:gap-6">
      <a
        className=" text-white text-base hover:font-bold md:text-2xl"
        href="#">
        Home
      </a>
      <a
        className=" text-white text-base hover:font-bold md:text-2xl"
        href="#">
        Sobre
      </a>
      <a
        className=" text-white text-base hover:font-bold md:text-2xl"
        href="#">
        Categorias
      </a>
      <a
        className=" text-white text-base hover:font-bold md:text-2xl"
        href="#">
        Contato
      </a>
    </nav>
  );
};

export default Navbar;
